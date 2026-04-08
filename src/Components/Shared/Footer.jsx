import React from "react";

function Footer() {
    const contactNumbers = [
        {
            icon: (
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2M9 21v-2M3 19h12" />
                </svg>
            ), text: "0300-1113467 (Reception)"
        },
        {
            icon: (
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v2a2 2 0 002 2h2a2 2 0 002-2v-2M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" />
                </svg>
            ), text: "1121 (Emergency)"
        },
        {
            icon: (
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            ), text: "146 (ICU)"
        },
        {
            icon: (
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.042 12.042 0 01.84 6.422l-7 4-7-4a12.042 12.042 0 01.84-6.422L12 14z" />
                </svg>
            ), text: "543 (Surgical Department)"
        },
    ];

    return (
        <footer className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white py-6">
            <div className="container mx-auto flex flex-col sm:flex-row items-center gap-4 ">
                {/* Logo / Title */}
                <div className="flex items-center gap-3 ml-6 mb-4 sm:mb-0">
                    <svg className="w-10 h-10 text-white p-2 bg-blue-700 rounded-full shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.9.37 1.78.72 2.6a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.48-1.48a2 2 0 012.11-.45c.82.35 1.7.6 2.6.72A2 2 0 0122 16.92z" />
                    </svg>
                    <h2 className="text-2xl font-bold">Emergency Contacts</h2>
                </div>

                {/* Sliding contact numbers */}
                <div className="overflow-hidden w-full relative bg-white rounded-full shadow-lg py-2">
                    <div className="flex animate-slide whitespace-nowrap">
                        {contactNumbers.concat(contactNumbers).map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-blue-700 font-semibold mx-8">
                                {item.icon} <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Inline keyframes */}
            <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          display: inline-flex;
          animation: slide 20s linear infinite;
        }
      `}</style>
        </footer>
    );
}

export default Footer;