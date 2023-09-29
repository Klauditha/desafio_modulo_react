

const BoxCard = ({cliente}) => {
  return (
    <div className="mt-5">
   
      <div className="card">
        <p className="fw-bold">
          Nombre: <span className="fw-normal">{cliente.name}</span>
        </p>
        <p className="fw-bold">
          Email: <span className="fw-normal">{cliente.email}</span>
        </p>
        <p className="fw-bold">
          Password: <span className="fw-normal">{cliente.password}</span>
        </p>
      </div>
    </div>
  )
}

export default BoxCard