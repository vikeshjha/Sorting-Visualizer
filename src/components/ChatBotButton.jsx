import React from 'react';
import { Link } from 'react-router-dom';

const ChatBotButton = () => {
  return (
    <div>
      <Link to="/chatbot">
        <button
          className="group relative outline-0 
            h-[48px] w-[48px] 
            border border-solid border-transparent 
            rounded-xl flex items-center justify-center 
            aspect-square cursor-pointer 
            transition-transform duration-200 active:scale-[0.95] 
            bg-green-700 
            shadow-[0_1px_2px_0_#00ff8050,0_2px_6px_2px_#00ff8040,0_15px_30px_-15px_#00ff804d,0_-1px_3px_0_inset_#00ff8030]"
        >
          {/* Spark icon */}
          <svg
            className="animate-pulse absolute z-10 overflow-visible transition-all duration-300 
              text-white group-hover:text-gray-200 
              top-[4px] left-[4px] 
              h-[16px] w-[16px] 
              group-hover:h-[28px] group-hover:w-[28px] 
              group-hover:left-[10px] group-hover:top-[10px]"
            stroke="none"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            ></path>
          </svg>

          {/* AI text */}
          <span className="text-[24px] font-extrabold leading-none text-white transition-all duration-200 group-hover:opacity-0">
            AI
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ChatBotButton;
