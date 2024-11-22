'use client';

import { useRouter } from 'next/navigation';
import { FaFilter, FaSearch } from 'react-icons/fa';
import { useState } from 'react';

type FilterBarProps = {
  status?: string;
  gender?: string;
};

const FilterBar: React.FC<FilterBarProps> = ({ status = '', gender = '' }) => {
  const router = useRouter();

  const [currentStatus, setCurrentStatus] = useState(status);
  const [currentGender, setCurrentGender] = useState(gender);

  const handleFilterChange = (field: string, value: string) => {
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set(field, value);
    } else {
      params.delete(field);
    }

    if (field === 'status') {
      setCurrentStatus(value);
    } else if (field === 'gender') {
      setCurrentGender(value);
    }

    router.push(`?${params.toString()}`);
  };

  const clearFilters = () => {
    setCurrentStatus('');
    setCurrentGender('');
    router.push('/'); 
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
      {}
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <label htmlFor="status" className="text-sm font-medium text-gray-700">
          <FaFilter className="inline-block text-gray-500 mr-1" /> Status:
        </label>
        <select
          id="status"
          value={currentStatus}
          onChange={(e) => handleFilterChange('status', e.target.value)}
          className="w-full sm:w-40 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      {}
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <label htmlFor="gender" className="text-sm font-medium text-gray-700">
          <FaSearch className="inline-block text-gray-500 mr-1" /> Gender:
        </label>
        <select
          id="gender"
          value={currentGender}
          onChange={(e) => handleFilterChange('gender', e.target.value)}
          className="w-full sm:w-40 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      {}
      <button
        onClick={clearFilters}
        className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterBar;