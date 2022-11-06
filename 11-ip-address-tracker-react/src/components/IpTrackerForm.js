import { useState } from "react"
import { ReactComponent as IconArrow } from "../icons/icon-arrow.svg"
import { isIP } from "is-ip"
import isValidDomain from "is-valid-domain"

const IpTrackerForm = ({ onSearch }) => {
    const [search, setSearch] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        let seachField = ""

        if (isIP(search)) {
            seachField = "ipAddress"
        } else if (isValidDomain(search)) {
            seachField = "domain"
        } else {
            return false
        }

        onSearch(seachField, search);

        setSearch('');
    }

    return (
        <form id="ipTrackerForm" onSubmit={onSubmit} className="ip-tracker-form"
              action="https://geo.ipify.org/api/v2/country">
            <input type="hidden" name="apiKey" value="at_GYS57pFQ0lvCDIIi7FRF4HVEoXaFo" />
            <label htmlFor="searchValueField" className="sr-only">Search for any IP address or
                domain</label>
            <input className="min-w-0 basis-full rounded-l-2xl text-base py-4.5 px-6"
                   id="searchValueField"
                   required
                   type="text" name="searchValue" value={search} placeholder="Search for any IP address or domain"
                   onChange={(e) => setSearch(e.target.value)} />

            <button className="text-white text-sm py-4.5 px-6 bg-black rounded-r-2xl hover:bg-gray transition-colors"
                    aria-label="Submit IP tracker form">
                <IconArrow />
            </button>
        </form>
    )
}

export default IpTrackerForm