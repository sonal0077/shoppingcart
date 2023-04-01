import React, { useEffect, useState } from 'react'

const View = () => {
    var{shoppingcart,setShoppingcart}=useState([])
    useEffect(()=>){
        axios.get("http://localhost:3002/posts")
        .then(Response=>{setShoppingcart(shoppingcart=Response.data)
        console.log(shoppingcart)
    })
    }
  return (
    <TableContainer>
        <Table>
            <TableHead>
                <Tableflow>
                    <Tablecell>Name</Tablecell>
                    <Tablecell>Brand</Tablecell>
                    <Tablecell>Quantity</Tablecell>
                    <Tablecell>Price<Tablecell>
                    </Tableflow>
                    
            </TableHead>
            <TableBody>
                {Shoppingcart.map((value,index)=>{
                    return <TableFlow>
                        <Tablecell>value.name</Tablecell>
                    <Tablecell>value.brand</Tablecell>
                    <Tablecell>value.quantity</Tablecell>
                    <Tablecell>value.price</Tablecell>

                    <Button onClick={()=>deleteValue(Value.id)}>delete</Button>

                    </TableFlow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
    
}

export default View
