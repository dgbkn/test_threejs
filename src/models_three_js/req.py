import requests

s = requests.Session()


headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'en-US,en-IN;q=0.9,en;q=0.8,hi-IN;q=0.7,hi;q=0.6',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded',
    # 'Cookie': '_gcl_au=1.1.423201779.1681314993; _fbp=fb.1.1681315011939.628019460; _ga_YGR3KXYP8E=GS1.1.1683260578.1.0.1683260578.60.0.0; _ga_FJWJWLKRVL=GS1.1.1684395620.23.0.1684396839.0.0.0; _hjSessionUser_2900707=eyJpZCI6ImQ0Y2JlMWNiLTVjMjEtNTgwNC1iYzM3LWZmNmU4MjgxMDU4YyIsImNyZWF0ZWQiOjE2ODc2MTYzMjk4NjgsImV4aXN0aW5nIjpmYWxzZX0=; _ga=GA1.1.1903107215.1681101690; _ga_GJRG3ZQJED=GS1.1.1687851068.3.0.1687851071.57.0.0; _ga_5K6V5S5WTM=GS1.1.1687851068.3.0.1687851071.57.0.0; JSESSIONID=E05247C76605FC4F82EE553A7A9552EF',
    'Origin': 'https://webkiosk.thapar.edu',
    'Referer': 'https://webkiosk.thapar.edu/',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1788.0',
    'sec-ch-ua': '"Edge";v="114", "Chromium";v="114", "Not=A?Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

data = {
    'txtuType': 'Member Type',
    'UserType': 'S',
    'txtCode': 'Enrollment No',
    'MemberCode': '102203853',
    'txtPin': 'Password/Pin',
    'Password': '12345',
    'BTNSubmit': 'Submit',
}

response = s.post('https://webkiosk.thapar.edu/CommonFiles/UserAction.jsp', headers=headers, data=data)

response_marks = s.get("https://webkiosk.thapar.edu/StudentFiles/Exam/StudentEventMarksView.jsp")

print(response_marks.text)


