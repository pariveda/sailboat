#Sailboat

Static website template for S3 hosted websites. Demonstrates cross domain auth and rest access with stateless JWT tokens.

Built to be used with https://github.com/pariveda/sailboatapi as a serverless backend allowing a complete serverless architecture. 

##Setup and Install

Clone the project from github:
```
git clone https://github.com/pariveda/sailboat.git
```

Install project dependencies via npm in project root:
```
npm install
```

Update gulp build script with your bucket name and AWS profile, then build and deploy (please see AWS docs for setting up cli and profile keys):
```
gulp deploy
```

##Setting up an S3 bucket for hosting a static website
 
- Create bucket and view bucket properties
- Click on "Static Website Hosting" and enable website hosting
- For index document enter: "index.html"
- Click "Permissions" then "Edit bucket policy" and enter the following text, modified with your bucket name
```
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "PublicReadGetObject",
			"Effect": "Allow",
			"Principal": "*",
			"Action": "s3:GetObject",
			"Resource": "arn:aws:s3:::YOUR-BUCKET-NAME-HERE/*"
		}
	]
}
```

# License

Sailboat - Static website project template

|                      |                                          |   
|:---------------------|:-----------------------------------------|
| **Author:**          | Dan Hogue (<dan.hogue@parivedasolutions.com>)
| **Copyright:**       | Copyright 2016, Pariveda Solutions
| **License:**         | Apache License, Version 2.0 

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and 
limitations under the License.
