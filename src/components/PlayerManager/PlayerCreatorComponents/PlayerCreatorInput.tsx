const PlayerCreatorInput=({handleNameChange, handleEnterKeyDown, inputRef,name})=>{
    
    return (
        <input
                type="text"
                value={name}
                 ref={inputRef}
                onChange={handleNameChange}
                onKeyDown={handleEnterKeyDown}
            />
    )
}

export {PlayerCreatorInput}