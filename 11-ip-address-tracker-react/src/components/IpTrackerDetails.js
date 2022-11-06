import PropTypes from "prop-types"

const IpTrackerDetails = ({ ipAddress, location, timezone, isp }) => {
    return (
        <div className="ip-tracker-details">
            <div className="info mb-6 md:mb-0">
                <p className="info-label">IP Address</p>
                <p className="info-value">{ipAddress}</p>
            </div>
            <div className="info mb-6 md:mb-0">
                <p className="info-label">Location</p>
                <p className="info-value">{location}</p>
            </div>
            <div className="info mb-6 md:mb-0">
                <p className="info-label">Timezone</p>
                <p className="info-value">{timezone}</p>
            </div>
            <div className="info">
                <p className="info-label">ISP</p>
                <p className="info-value">{isp}</p>
            </div>
        </div>
    )
}

IpTrackerDetails.defaultProps = {
    ipAddress: "N/A",
    location: "N/A",
    timezone: "N/A",
    isp: "N/A",
}

IpTrackerDetails.propTypes = {
    ipAddress: PropTypes.string,
    location: PropTypes.string,
    timezone: PropTypes.string,
    isp: PropTypes.string,
}

export default IpTrackerDetails