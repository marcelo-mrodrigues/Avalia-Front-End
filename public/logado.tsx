  const [isLoggedIn, setIsLoggedIn]=useState(false);

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if (token){
      setIsLoggedIn(true);
    }
  },[])