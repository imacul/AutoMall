"use client";

import { useState } from "react";
import { SearchMenu } from "@/components";

const SearchBar = () => {
  const [maker, setMaker] = useState("")
    const handleSearch = () => {

    }

  return (
    <form onSubmit={handleSearch} className="searchbar">
        <div className="searchbar__item">
            <SearchMenu
              maker={maker}
              setMaker={setMaker}
             />
        </div>
    </form>
  )
}

export default SearchBar;