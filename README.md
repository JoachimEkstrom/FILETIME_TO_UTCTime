How to convert from Windows FILETIME To UTC time/date and back in JavaScript.  

From Wikipedia https://en.wikipedia.org/wiki/System_time

System time is measured by a system clock, which is typically implemented as a simple count of the number of ticks that have transpired since some arbitrary starting date, called the epoch. For example, Unix and POSIX-compliant systems encode system time ("Unix time") as the number of seconds elapsed since the start of the Unix epoch at 1 January 1970 00:00:00 UT, with exceptions for leap seconds. Systems that implement the 32-bit and 64-bit versions of the Windows API, such as Windows 9x and Windows NT, provide the system time as both SYSTEMTIME, represented as a year/month/day/hour/minute/second/milliseconds value, and FILETIME, represented as a count of the number of 100-nanosecond ticks since 1 January 1601 00:00:00 UT as reckoned in the proleptic Gregorian calendar.

--------------------------------------

    // Convert from FILETIME to UTC time
    function fileTimeToDate( FILETIME ) { 
        return new Date ( (FILETIME / 10000) - 11644473600000 ).toUTCString()
    }	

    // Convert from UTC time to FILETIME
    function UTCToFileTime( dt ) { 
        return ((dt * 10000) + 116444736000000000)
    }
