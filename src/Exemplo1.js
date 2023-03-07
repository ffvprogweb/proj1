export default function Exemplo1() {
  const employees = [
    { id: 1, name: "Alice", country: "Canada" },
    { id: 2, name: "Bob", country: "Belgium" },
    { id: 3, name: "Carl", country: "Canada" },
    { id: 4, name: "Dean", country: "Germany" },
  ];

  const filtered1 = employees.filter((employee) => {
    return employee.country === "Canada";
  });

  console.log("filtro1: ", filtered1[0]);
  console.log("filtro1: ", filtered1[1]);
  // [{id: 1, name: 'Alice', country: 'Canada'}, {id: 3, name: 'Carl', 'country: 'Canada'}]

  // filter with 2 conditions
  const filtered2 = employees.filter((employee) => {
    return employee.country === "Canada" && employee.id === 3;
  });
  console.log("filtro2: ", filtered2[0]);
  // [{id: 3, name: 'Carl', country: 'Canada'}]
  return (
    <div>
      {/* {filtered1.map((employee) => { */}
      {filtered2.map((employee) => {
        return (
          <div key={employee.id}>
            <h2>name: {employee.name}</h2>
            <h2>country: {employee.country}</h2>

            <hr />
          </div>
        );
      })}
    </div>
  );
}
