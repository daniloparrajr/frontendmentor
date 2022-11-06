import IpTrackerForm from "./IpTrackerForm"
import IpTrackerDetails from "./IpTrackerDetails"

const Map = ({ details, onSearch }) => {
    return (
        <header className="app-header">
            <div className="container mx-auto text-center">
                <h1 className="app-title">IP Address Tracker</h1>
                <IpTrackerForm onSearch={onSearch} />
                <IpTrackerDetails ipAddress={details.ipAddress} isp={details.isp} location={details.location}
                                  timezone={details.timezone} />
            </div>
        </header>
    )
}

export default Map