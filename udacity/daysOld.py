# By Websten from forums
#
# Given your birthday and the current date, calculate your age in days. 
# Account for leap days. 
#
# Assume that the birthday and current date are correct dates (and no 
# time travel). 
#

def daysBetweenDates(year1, month1, day1, year2, month2, day2):
    ##
    # Your code here.
    ##
    monthDays = 0

    fullYears = year2-year1
    if month2<month1:
        fullYears -= 1
        monthDays += 365

    monthDays = monthDays + daysFromMonths(month2) + day2 - daysFromMonths(month1) - day1

    daysOld = fullYears*365 + monthDays + leapDays(year1,month1,year2,month2)
    return daysOld

def daysFromMonths(month):
    daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31 ,30 ,31, 30, 31]
    i=0
    sum = 0
    while i<month-1:
        sum += daysInMonths[i]
        i += 1
    return sum

def leapDays(startYear,startMonth,endYear,endMonth):
    days = 0

    if startMonth>3:
        startYear += 1
    if endMonth<3:
        endYear -= 1

def leapDays(startYear,startMonth,endYear,endMonth):
    days = 0
    
    if startMonth>3:
        startYear += 1
    if endMonth<3:
        endYear -= 1
		
    while startYear<=endYear:
        if isLeapYear(startYear):
            days += 1
        startYear+=1

    return days

def isLeapYear(year):
    if(year%400==0):
        return True
    else:
        if(year%100==0):
            return False
        else:
            if(year%4==0):
                return True
            else:
                return False
	
# Test routine

def test():
    test_cases = [((2012,1,1,2012,2,28), 58), 
                  ((2012,1,1,2012,3,1), 60),
                  ((2011,6,30,2012,6,30), 366),
                  ((2011,1,1,2012,8,8), 585 ),
                  ((1900,1,1,1999,12,31), 36523)]
    for (args, answer) in test_cases:
        result = daysBetweenDates(*args)
        if result != answer:
            print "Test with data:", args, "failed"
        else:
            print "Test case passed!"

test()
