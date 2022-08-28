import React, {useState, useEffect} from 'react'
import { useFetch } from "./useFetch";

export const useUser = (id) => {
    const [user, setuser] = useState();
      const [userLoaded, setuserLoaded] =
        useState(false);
        async function useuser(id) {
         
              try {
                let act = await useFetch(
                  "users",
                  "GET",
                  {},
                  `/${id}`,
                );
              

                Object.keys(act.payload).length > 0 ? setuserLoaded(true) : null;
                
                
                setuser(act.payload);
              } catch (err) {
                console.log(err)
              }
             
            
          }
        
          useEffect(() => {
  
            const weatherTimeout = setTimeout(
              () => useuser(id),
              1000
            );
            return () => {
              clearTimeout(weatherTimeout);
            };
          }, []);

          return [user, userLoaded]
}

