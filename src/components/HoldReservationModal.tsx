import React, { useState } from 'react';
import { Product } from '../types';
import { STORE_INFO } from '../data/products';
import { 
  X, 
  ShoppingBag, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  PlaneTakeoff, 
  Phone,
  Calendar
} from 'lucide-react';

interface HoldReservationModalProps {
  product: Product | null;
  selectedColor?: string;
  onClose: () => void;
}

export const HoldReservationModal: React.FC<HoldReservationModalProps> = ({
  product,
  selectedColor,
  onClose,
}) => {
  const [passengerName, setPassengerName] = useState('');
  const [passengerEmail, setPassengerEmail] = useState('');
  const [passengerPhone, setPassengerPhone] = useState('');
  const [flightTime, setFlightTime] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passengerName.trim() || !passengerEmail.trim() || !passengerPhone.trim()) {
      setError('Please provide your name, email, and phone number.');
      return;
    }
    setError('');
    setIsSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-[#121214] border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#1C1C1F] text-zinc-400 hover:text-white border border-white/10"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="text-center space-y-4 py-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-white">
              Luggage Hold Requested!
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              We have set aside your <strong className="text-white">{product.name}</strong> ({selectedColor || product.colors[0]?.name || 'Standard'}) at our San Francisco International Airport store for <strong className="text-orange-500">{passengerName}</strong>.
            </p>
            <div className="p-4 rounded-2xl bg-[#1C1C1F] border border-white/5 text-xs text-zinc-400 space-y-1">
              <div className="font-semibold text-zinc-200">Need it immediately upon arrival?</div>
              <div>Call our desk at <a href={`tel:${STORE_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-orange-500 font-bold">{STORE_INFO.phone}</a></div>
            </div>
            <button
              onClick={onClose}
              className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow-lg shadow-orange-500/20 cursor-pointer"
            >
              Done &amp; Return to Shop
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] font-bold text-zinc-300 uppercase tracking-wider">
                <PlaneTakeoff className="w-3 h-3 text-orange-500" /> SFO In-Store Pickup Hold
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mt-1">
                Reserve for SFO Airport Pickup
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                We will have this luggage piece set aside under your name when you reach SFO. No upfront payment required.
              </p>
            </div>

            {/* Product Summary Mini Card */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#1C1C1F] border border-white/5">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-14 h-14 rounded-xl object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="font-bold text-sm text-white truncate">{product.name}</div>
                <div className="text-xs text-orange-500 font-semibold">${product.price.toFixed(2)}</div>
                <div className="text-[11px] text-zinc-500">{product.dimensions.split(' ')[0]} • {selectedColor || 'Standard'}</div>
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-800/60 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300 block">Passenger Name *</label>
                <input
                  type="text"
                  required
                  value={passengerName}
                  onChange={(e) => setPassengerName(e.target.value)}
                  placeholder="e.g. David Miller"
                  className="w-full px-3.5 py-2.5 bg-[#0A0A0C] border border-white/10 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-300 block">Phone (for SMS/Call) *</label>
                  <input
                    type="tel"
                    required
                    value={passengerPhone}
                    onChange={(e) => setPassengerPhone(e.target.value)}
                    placeholder="e.g. 510-459-7626"
                    className="w-full px-3.5 py-2.5 bg-[#0A0A0C] border border-white/10 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-300 block">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={passengerEmail}
                    onChange={(e) => setPassengerEmail(e.target.value)}
                    placeholder="e.g. david@example.com"
                    className="w-full px-3.5 py-2.5 bg-[#0A0A0C] border border-white/10 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300 block">Approx. SFO Arrival or Flight Time</label>
                <input
                  type="text"
                  value={flightTime}
                  onChange={(e) => setFlightTime(e.target.value)}
                  placeholder="e.g. Today around 3:30 PM (Flight UA 412)"
                  className="w-full px-3.5 py-2.5 bg-[#0A0A0C] border border-white/10 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-orange-500/20 cursor-pointer"
              >
                Confirm SFO In-Store Hold
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
