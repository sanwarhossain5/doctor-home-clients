import { useEffect } from "react"
const useTitle = title =>{
  useEffect(() =>{
    document.title = `${title} - Doctor Home`
  }, [title])
};

export default useTitle