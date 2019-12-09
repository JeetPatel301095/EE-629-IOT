import json
import sys
import time
import datetime
import gspread
import subprocess
from oauth2client.service_account import ServiceAccountCredentials
GDOCS_OAUTH_JSON       = 'KEY-AUTH.json' 
#Key JSON file name
GDOCS_SPREADSHEET_NAME = 'IOTProject'
def login_open_sheet(oauth_key_file, spreadsheet):
    try:
        credentials = ServiceAccountCredentials.from_json_keyfile_name(oauth_key_file, 
                      scopes = ['https://spreadsheets.google.com/feeds',
                                'https://www.googleapis.com/auth/drive'])
        gc = gspread.authorize(credentials)
        worksheet = gc.open(spreadsheet).sheet1
        return worksheet
    except Exception as ex:
        print('Unable to login and get spreadsheet. Check OAuth credentials, spreadsheet name, and')
        print('make sure spreadsheet is shared to the client_email address in the OAuth .json file!')
        print('Google sheet login failed with error:', ex)
        sys.exit(1)
print('Logging sensor measurements to {0}'.format(GDOCS_SPREADSHEET_NAME))
print('Press Ctrl-C to quit.')
worksheet = login_open_sheet(GDOCS_OAUTH_JSON, GDOCS_SPREADSHEET_NAME)
dat = datetime.datetime.now()
time2 = sys.argv[1]    
print(dat)
print('LED Usage in sec: '+str(time2))
try:
    worksheet.append_row((str(dat), time2))
#        worksheet.append_row((dat, cpu, tmp))
# gspread==0.6.2
# https://github.com/burnash/gspread/issues/511  
except:
    print('Append error, logging in again')
    worksheet = None

