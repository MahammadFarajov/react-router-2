import React from 'react'

function Input( {label, value, onChange, type, onBlur, defaultValue = undefined, error} ) {
  return (
    <div>
        <div className="relative mt-4">
            <input defaultValue={defaultValue} onChange={onChange} value={value} type={type} placeholder='' name={label.toLowerCase()} id={label.toLowerCase()} className={`border pl-4 peer rounded-lg h-14 pt-1.5 font-medium focus-visible:outline-none w-full ${error ? "!border-red-500" : ""} `}/>
            <label htmlFor={label.toLowerCase()} className={ `absolute transition-all duration-300 peer-focus:top-3 peer-focus:scale-[0.8] pointer-events-none opacity-60 peer-placeholder-shown:opacity-80 top-3 left-3 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 -translate-y-1/2 ${value.length < 0 ? "!scale-100 !left-4 !top-1/2 !-translate-y-1/2" : ""}`}>{label}</label>
            {error && <h1 className='text-red-500'>{error}</h1>}
        </div>
    </div>
  )
}

export default Input