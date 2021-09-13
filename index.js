// Convert from FILETIME to UTC time
function fileTimeToDate( FILETIME ) { 
    return new Date ( (FILETIME / 10000) - 11644473600000 ).toUTCString()
 }	

 // Convert from UTC time to FILETIME
function UTCToFileTime( dt ) { 
    return ((dt * 10000) + 116444736000000000)
 }