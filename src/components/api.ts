export type ApiProps = {
  message: string;
  statusText: string;
  status: string;
};

export async function getVans(typesearch: string) {
  const res = await fetch(`/api/vans?type=${typesearch}`);

  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function getVansDetails(id: string) {
  const res = await fetch(`/api/vans/${id}`);
  if (!res.ok) {
    throw {
      message: "Failed to fetch van details",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.van;
}

export async function getHostVans() {
  const res = await fetch(`/api/host/vans/`);
  if (!res.ok) {
    throw {
      message: "Failed to fetch host vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function getHostVansDetails(id: string) {
  const res = await fetch(`/api/host/vans/${id}`);
  if (!res.ok) {
    throw {
      message: "Failed to fetch host van details",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans[0];
}
