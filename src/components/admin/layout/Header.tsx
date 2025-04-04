import React from "react"

export const AdminHeader: React.FC =  ()=> {
    return (
        <div className=" w-full p-5 flex justify-between">
            <div>
                <h1 className="font-bold text-2xl text-green-800">Volga Farm Admin</h1>
            </div>
            <div>
                <button className="text-white bg-green-800 rounded-md py-1 px-2 font-semibold shadow-lg">Logout</button>
            </div>
        </div>
    )
}