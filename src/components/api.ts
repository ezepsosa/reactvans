export type ApiProps = {
  message: string;
  statusText: string;
  status: string;
};

export type LoginProps = {
  email: string;
  password: string;
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

export async function getHostReviews() {
  const res = await fetch(`/api/host/reviews/`);

  if (!res.ok) {
    throw {
      message: "Failed to fetch reviews",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.reviews;
}

export async function loginUser(creds: LoginProps) {
  {
    const res = await fetch("/api/login", {
      method: "post",
      body: JSON.stringify(creds),
    });
    const data = await res.json();
    if (!res.ok) {
      throw {
        message: data.message,
        statusText: res.statusText,
        status: res.status,
      };
    }

    return data;
  }
}

export async function getSessions(session: string) {
  const res = await fetch(`/api/sessions/${session}`);

  if (!res.ok) {
    throw {
      message: "Failed to fetch sessions",
      statusText: res.statusText,
      status: res.status,
    };
  }
  return (await res.json()).sessions.length;
}
