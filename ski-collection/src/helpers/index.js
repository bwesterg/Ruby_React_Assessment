const skisUrl = "http://localhost:3000/skis/";

export function patchSki(ski){
  fetch(skisUrl + ski.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ski })
    })
}

export function postSki(ski){
  fetch(skisUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`
    },
    body: JSON.stringify({ ski })
  })
}

export function deleteSki(id){
  fetch(skisUrl + id, { method: "DELETE" })
}