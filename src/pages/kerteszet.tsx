import { PureComponent, useEffect, useState } from "react";
import apiClient from "../api/apiClient";
import { Noveny } from "../types/Noveny";
import "../pages/kerteszet.css";

function Kerteszet() {
  const [data, setData] = useState<Array<Noveny>>();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(1);
  const [perennial, setPerennial] = useState(false);

  useEffect(() => {
    apiClient.get(`plants`).then((resp) => {
      setData(resp.data);
      console.log(resp.data);
    });
  }, []);

  const AddPlant = () => {
    const AddedPlant = {
      name,
      perennial,
      category,
      price,
    } as Noveny;

    if (!name || !category || price <= 0) {
      alert("név, kategória, ár");
      return;
    }

    apiClient.post(`plants`, AddedPlant).then(() => {
      apiClient.get(`plants`).then((resp) => {
        setData(resp.data);
        console.log(resp.data);
      });
    });
  };

  const ChangePrice = (id: number) => {
    const ChangedPlant = { price };

    if (price <= 0) {
      alert("pozitív legyen az ár");
      return;
    }

    apiClient.put(`plants/${id}`, ChangedPlant).then(() => {
      apiClient.get(`plants`).then((resp) => {
        setData(resp.data);
        console.log(resp.data);
      });
    });
  };

  const DeletePlant = (id: number) => {
    apiClient.delete(`plants/${id}`).then(() => {
      apiClient.get(`plants`).then((resp) => {
        setData(resp.data);
        console.log(resp.data);
      });
    });
  };

  return (
    <div>
      <h1>Kertészet</h1>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>név</th>
            <th>évelő</th>
            <th>ár</th>
            <th>kategória</th>
            <th>ár módosítása</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.perennial ? "Igen" : "Nem"}</td>
              <td>{d.price}</td>
              <td>{d.category}</td>
              <td>
                <input
                  type="number"
                  onChange={(e) => {
                    setPrice(Number(e.target.value));
                  }}
                />{" "}
                <button
                  onClick={() => {
                    ChangePrice(d.id);
                  }}
                >
                  Mód.
                </button>{" "}
              </td>
              <td>
                <button
                  onClick={() => {
                    DeletePlant(d.id);
                  }}
                >
                  Törlés
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <label>Ár: </label>
        <input
          type="number"
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Név: </label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <label>Kategória: </label>
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">Válassz kategóriát</option>
          <option value="Virág">Virág</option>
          <option value="Bokor">Bokor</option>
          <option value="Fa">Fa</option>
        </select>
      </div>

      <div>
        <label>Évelő-e: </label>
        <input
          type="checkbox"
          checked={perennial}
          onChange={() => setPerennial(!perennial)}
        />
      </div>

      <button onClick={AddPlant}>Hozzáadás</button>
    </div>
  );
}

export default Kerteszet;
