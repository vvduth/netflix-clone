import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import prismadb from '@/lib/prismadb'

// chewck if we logged in 

const serverAuth =async (req:NextApiRequest) => {
    // use in api controller
    const session = await getSession({req});
    // get the jwt for logged user to send request with to prove

    if (!session?.user?.email ) {
        throw new Error("Not signed in")
    }

    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email
        }
    });

    if (!currentUser) {
        throw new Error("Not sign in "); 
    }

    return {currentUser}; 
        

}

export default serverAuth ;