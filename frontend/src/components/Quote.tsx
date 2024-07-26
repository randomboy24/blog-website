import React from 'react';
export const Quote = () => {
    return(
        <div className="bg-slate-200 h-screen flex flex-col justify-center">
            <div className="flex justify-center">
                <div className='flex flex-col'>
                    <div className="max-w-lg text-3xl font-bold"> 
                        "The customer  service I receieved was exceptional.The support team went above and beyond to address my concerns."
                    </div>
                    <div className='font-bold mt-4 '>
                        Jules Winnfield
                    </div>
                    <div className=''>
                        CEO,Acme Inc
                    </div>
                </div>
            </div>
        </div>
    )
}