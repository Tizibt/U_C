 import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DataTable from'react-data-table-component'
import { Transform } from "stream";
 
const customStyles={
    headRow:{
        style:{
            backgroundcolor:'blue',
            color:"white"
        }
    },
    headcells:{
        style:{
            fontsize:'16px',
            fontweight:'600',
            textTransform:'uppercase',
        },
    },
    cells:{
        style:{
            fontsize:'15px',

        },
    },
}

function Formes(){
    const column=[
        {
            name:"Number",
            selector:row=>row.id
        },
        {
            name:"Name",
            selector:row=>row.name
        },
        {
            name:"location",
            selector:row=>row.email,
            Sortable:true

        },
        {
           name:"department",
           selector:row=>row.address.city,
           Sortable:true

        }
    ]
    useEffect(()=>{
        const fetData=async()=>{
            axios.get()
            .then(res=>setRECORDS(res.data))
            .catch(err=>console.log(err));
        }
        fetData();

    },[])
    
    const[records,setRECORDS]= useState ([])
    const handleFilter=(event)=>{
        const newData=records.filter(row=>row.name)
    }
    return(
        <div style={{padding:"50px 10%",background:"gray"}}>
            <div style={{display:'flex',justifyContent:'right'}}>
                <input type="text"placeholder='seach...'onChange={handleFilter} style={{padding:'6px 10px'}}/></div>
        <DataTable
        columns={column}
        data={records}
        customStyles={customStyles}
        pagination
        selectableRows
        ></DataTable>
        </div>
    )
}    

export default Formes;

