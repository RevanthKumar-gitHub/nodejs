const result = async()=>{
  const res = await fetch("http://www.google.com");
  console.log(res);  
  const data = res.json();
  console.log(data);
  
}

result();