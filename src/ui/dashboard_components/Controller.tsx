import { ControllerPaneContainer, EventInput, EventButton } from "./Containers";

export function Controller({lon, lat, disabled}) {

    <ControllerPaneContainer>
        <div style={{textAlign: 'center'}}>
            Units: 
            {" "}
            <select id="unit" value={String(units)} onChange={() => {setUnits(Boolean(!units))}} disabled={disabled}>
                <option value={"true"} onClick={() => handleFetch(locationCoords.lon, locationCoords.lat)}>Imperial</option>
                <option value={"false"} onClick={() => handleFetch(locationCoords.lon, locationCoords.lat)}>Metric</option>
            </select>
            {" "}
            <EventInput disabled={disabled} value={locationName} placeholder="Location" onChange={handleSearch}/>
            <ul className="locations">
                {locationList.length == 0 ? "" : locationList.map((element, index) => (
                    <li key={index} className="locations" onClick={() => {
                        handleFetch(element.lon, element.lat);
                        setLocationCoords(element); 
                        setLocationList([]);
                    }}>
                        {element.state ? element.name + ", " + element.state + ", " + element.country : 
                        element.name + ", " + element.country}
                    </li>
                    ))}
            </ul>
            <EventButton text="Update Weather Information" disabled={disabled} 
                onClick={() => handleFetch(locationCoords.lon, locationCoords.lat)} />
            {" "}
            <EventButton text="Use Exact Location" disabled={disabled} 
                onClick={() => handleFetch(locationCoords.lon, locationCoords.lat, true)} />
        </div>
    </ControllerPaneContainer>

}