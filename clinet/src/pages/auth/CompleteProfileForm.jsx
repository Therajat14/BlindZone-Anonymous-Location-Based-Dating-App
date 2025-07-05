import React, { useState } from "react";
import {
  User,
  Calendar,
  MapPin,
  Camera,
  Info,
  Heart,
  Landmark,
} from "lucide-react";

const initialState = {
  name: "",
  age: "",
  gender: "",
  bio: "",
  interests: "",
  location: "",
  photo: null,
  interestedIn: [],
};

const genders = ["Male", "Female", "Non-binary", "Other"];

export default function CompleteProfileForm({ onSubmit }) {
  const [form, setForm] = useState(initialState);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files[0]) {
      setForm((f) => ({ ...f, photo: files[0] }));
      setPhotoPreview(URL.createObjectURL(files[0]));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
  };

  const toggleInterestedIn = (gender) => {
    const current = form.interestedIn || [];
    const updated = current.includes(gender)
      ? current.filter((g) => g !== gender)
      : [...current, gender];
    setForm((f) => ({ ...f, interestedIn: updated }));
  };

  return (
    <div className="min-h-screen bg-[#0e0e10] p-6 text-white">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-6 text-center text-3xl font-bold">
          {step === 1
            ? "Complete Your Profile"
            : "Your Interests & Preferences"}
        </h2>

        <form
          onSubmit={step === 1 ? handleNext : handleSubmit}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {/* Step 1 */}
          {step === 1 && (
            <>
              {/* Profile Picture */}
              <div className="flex flex-col items-center md:col-span-2">
                {photoPreview ? (
                  <img
                    src={photoPreview}
                    alt="Preview"
                    className="h-28 w-28 rounded-full border-4 border-blue-500 object-cover shadow-md"
                  />
                ) : (
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-gray-500 text-sm text-gray-400">
                    No Photo
                  </div>
                )}
              </div>

              {/* Upload Photo */}
              <div className="relative md:col-span-2">
                <Camera className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-blue-500" />
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full rounded-2xl bg-blue-500/10 py-4 pl-12 pr-4 text-white placeholder-gray-400 file:rounded-md file:bg-blue-500 file:text-white"
                />
              </div>

              {/* Full Name */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-blue-500" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                  className="w-full rounded-2xl bg-blue-500/10 py-4 pl-12 pr-4 text-white placeholder-gray-400"
                />
              </div>

              {/* Age */}
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-blue-500" />
                <input
                  type="number"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  min={18}
                  max={100}
                  required
                  placeholder="Age"
                  className="w-full rounded-2xl bg-blue-500/10 py-4 pl-12 pr-4 text-white placeholder-gray-400"
                />
              </div>

              {/* Gender */}
              <div className="relative">
                <Landmark className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-blue-500" />
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none rounded-2xl bg-blue-500/10 py-4 pl-12 pr-10 text-white placeholder-gray-400"
                >
                  <option
                    value=""
                    disabled
                    className="bg-[#0e0e10] text-gray-400"
                  >
                    Select Gender
                  </option>
                  {genders.map((g) => (
                    <option
                      key={g}
                      value={g}
                      className="bg-[#0e0e10] text-white"
                    >
                      {g}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-blue-500">
                  ▼
                </div>
              </div>

              {/* Location */}
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-blue-500" />
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Location"
                  required
                  className="w-full rounded-2xl bg-blue-500/10 py-4 pl-12 pr-4 text-white placeholder-gray-400"
                />
              </div>

              {/* Next Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4 font-semibold text-white transition-transform hover:scale-105"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <>
              {/* Interests */}
              <div className="relative md:col-span-2">
                <Heart className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-blue-500" />
                <input
                  type="text"
                  name="interests"
                  value={form.interests}
                  onChange={handleChange}
                  placeholder="e.g. music, traveling, coding"
                  required
                  className="w-full rounded-2xl bg-blue-500/10 py-4 pl-12 pr-4 text-white placeholder-gray-400"
                />
              </div>

              {/* Bio */}
              <div className="relative md:col-span-2">
                <Info className="absolute left-4 top-4 z-10 text-blue-500" />
                <textarea
                  name="bio"
                  value={form.bio}
                  onChange={handleChange}
                  maxLength={300}
                  placeholder="Tell everyone about yourself..."
                  required
                  className="w-full rounded-2xl bg-blue-500/10 py-4 pl-12 pr-4 text-white placeholder-gray-400"
                  rows={3}
                />
              </div>

              {/* Interested In */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-gray-300">
                  I'm Interested In
                </label>
                <div className="flex flex-wrap gap-4">
                  {genders.map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => toggleInterestedIn(g)}
                      className={`rounded-full px-4 py-2 text-sm transition ${
                        form.interestedIn.includes(g)
                          ? "bg-blue-500 text-white"
                          : "bg-blue-500/10 text-white hover:bg-blue-500/20"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-4 md:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4 font-semibold text-white transition-transform hover:scale-105"
                >
                  Complete Profile
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
