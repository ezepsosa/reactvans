export async function getVans(typesearch: string) {
  const res = await fetch(`/api/vans?type=${typesearch}`);
  const data = await res.json();
  return data.vans;
}

export async function getVansDetails(id: string) {
  const res = await fetch(`/api/vans/${id}`);
  const data = await res.json();
  return data.van;
}

export async function getHostVans() {
  const res = await fetch(`/api/host/vans/`);
  const data = await res.json();
  return data.vans;
}

export async function getHostVansDetails(id: string) {
  const res = await fetch(`/api/host/vans/${id}`);
  const data = await res.json();
  return data.vans[0];
}
