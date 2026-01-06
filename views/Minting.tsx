
import React from 'react';
import { ViewState } from '../types';

interface MintingProps {
  setView: (view: ViewState) => void;
}

const Minting: React.FC<MintingProps> = ({ setView }) => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold">Minting Page</h1>
      <p>This is where the minting functionality will be.</p>
      <button onClick={() => setView(ViewState.PROFILE)} className="mt-4 px-4 py-2 bg-latitude-red text-white rounded">
        Back to Profile
      </button>
    </div>
  );
};

export default Minting;
