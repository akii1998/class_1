import React from "react";

export default function Properties(data) {
  console.log(data.data);
  return (
    <>
      {data.data.map((e) => {
        return (
          <div key={e.id}>
            <div className="app" >
              <p>
                <b>Login :</b> {e.login}
              </p>
             <h2>id:- {e.id}</h2>
              <p>Node id :- {e.node_id}</p>
              <img src={e.avatar_url} alt="not_more" />
            </div>
            <br />
            <br />
          </div>
        );
      })}
    </>
  );
}

