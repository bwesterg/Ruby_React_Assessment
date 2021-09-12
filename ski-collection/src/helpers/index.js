const skisUrl = "http://localhost:3000/skis/";

export function patchSki(ski){
  fetch(skisUrl + ski.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({ ski })
    })
}

export function postSki(ski, user){
  fetch(skisUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`
    },
    body: JSON.stringify({ ski: {...ski, user_id: user.id} })
  }).then(response => response.json())
}

export function deleteSki(id){
  fetch(skisUrl + id, { 
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${localStorage.token}`
    }
  })
}