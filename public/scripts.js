
async function fetchdiners() {
    const dining = await fetch("/api/dining");
    const dininghall = await data.json();  
    const dinerarray = dininghall.data; 
    console.table(dinerarray);
    const target = document.querySelector('.target'); 
    dinerarray.forEach((item) => { 
      const halls = document.createElement('tr');
      halls.innerHTML = 
      `
      <td>${item.hall_id}</td>
      <td>${item.hall_name}</td>
      <td>${item.hall_address}</td>
      `; 
      target.append(halls);
    });
   }
   async function windowActions() {
    fetchdiners();
   }
   window.onload = windowActions();
   
   