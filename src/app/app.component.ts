import { Component, OnInit, Testability } from '@angular/core';
import { FormsModule, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { stringify } from '../../node_modules/@angular/compiler/src/util';
import { AppService } from './app.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription, BehaviorSubject } from 'rxjs';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  downloadAvailable: boolean = false;
  pushToGit: boolean = false;
  jenkinsDeploy: boolean = false;



  appType1 = 'fullStack';
  RadioOptions = 'radioOption1';

  appName = "";
  defaultPackage = "com.wipro";
  authType1 = "";
  defaultPort = 8080;
  messagingAPI1 = "";
  uiFramework1 = "";
  mlsupport1 = "";
  libSassCSS1 = "";
  databaseType1 = "SQL database";
  enableLiquibase1 = "";
  devDatabase1 = "MySQL";
  prodDatabase1 = "";
  searchEngine1 = "";
  serviceDiscovery1 = "";
  testFramework1 = "";
  buildtool1 = "Maven";



  isValid = false;


  deploymentEnv = "";
  gitRepo = "";

  finalJson: any = {};
  strJSON: any;
  stringifiedJSON: any;
  test: any;
  array: any = [
    {
      "fieldName": "",
      "fieldType": ""
    }
  ];
  obj: any = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "work": "Code",
    "street": "",
    "city": "",
    "state": "",
    "zip": "",
    "Test11": [
      "Emil",
      "Tobias",
      "Linus"
    ],

    "defaultPackage": "com.wipro",
    "appName": "",
    "netflixEcommServicesTypes": [
      "shoppingcart-ui",
      "service-registry",
      "order-service",
      "inventory-service",
      "config-server",
      "catalog-service",
      "api-gateway-server"
    ],
    "appType": [
      "FullStack",
      "Microservice application",
      "Database As Service",
      "Netflix OSS Ecommerce Stack Template"
    ],
    "appType1": "Microservice application",
    "servicesTypes": [
      "shoppingcart-ui",
      "service-registry",
      "order-service",
      "inventory-service",
      "config-server",
      "catalog-service",
      "api-gateway-server"
    ],
    "serviceSelection": [
      true,
      true,
      true,
      true,
      true,
      true,
      true
    ],
    "serviceTemplateAppName": [
      "shoppingcart-ui",
      "service-registry",
      "order-service",
      "inventory-service",
      "config-server",
      "catalog-service",
      "api-gateway-server"
    ],
    "authType1": "",
    "otherType1": "",
    "testFramework1": "",
    "translationSupport1": "",
    "databaseType1": "",
    "prodDatabase1": "",
    "devDatabase1": "",
    "hibernateCache1": "",
    "enableLiquibase1": "",
    "includeJhipster1": "",
    "buildtool1": "Maven",
    "deploymentEnv": "",
    "jenkinsToken": "",
    "jenkinsK8SUrl": "",
    "jenkinsK8SNamespace": "",
    "uiFramework1": "",
    "libSassCSS1": "",
    "mlsupport1": "",
    "languages1": [],
    "testing1": [],
    "authType": [
      "Session-based",
      "OAuth 2.0",
      "JSON Web Token (JWT)"
    ],
    "otherType": [
      "Social login (Google, Facebook, Twitter)",
      "Search engine using ElasticSearch",
      "Clustered HTTP sessions using Hazelcast",
      "WebSockets using Spring Websocket",
      "Asynchronous messages using Apache Kafka"
    ],
    "testFramework": [
      "Performance tests using Gatling",
      "Behaviour tests using Cucumber",
      "Angular integration tests with Protractor"
    ],
    "translationSupport": [
      "Yes",
      "No"
    ],
    "databaseType": [
      "SQL database",
      "MongoDB"
    ],
    "prodDatabase": [
      "MySQL",
      "Oracle",
      "PostgreSQL",
      "MSSQL"
    ],
    "devDatabase": [
      "MySQL",
      "H2, running in-memory",
      "H2, with its data stored on disk"
    ],
    "hibernateCache": [
      "Ehcache",
      "Distributed Hazelcast"
    ],
    "enableLiquibase": "",
    "buildtool": [
      "Maven",
      "Gradle"
    ],
    "uiFramework": [
      "Angular",
      "React"
    ],
    "libSassCSS": [
      "Yes",
      "No"
    ],
    "entityRelations": [
      "ONE-ONE",
      "ONE-MANY",
      "MANY-MANY",
      "MANY-ONE"
    ],
    "mlsupport": [
      "Yes",
      "No"
    ],
    "languages": [
      "Danish",
      "French",
      "German",
      "Spanish"
    ],
    "testing": [
      "Gatling",
      "Cucumber",
      "Protractor"
    ],
    "datatypes": [
      "String",
      "Long",
      "Integer",
      "ZonedDateTime",
      "Double",
      "byte[]"
    ],
    "defaultPort": "8080",
    "messagingAPI": [
      "Kafka"
    ],
    "messagingAPI1": "",
    "searchEngine": [
      "ElasicSearch"
    ],
    "searchEngine1": "",
    "serviceDiscovery1": "",
    "serviceDiscovery": [
      "Eureka",
      "Consul"
    ],
    "pcfIntegration": true,
    "dasurl": "",
    "daspassword": "",
    "dasdb": "",
    "dasuname": "",
    "uiRequired": [
      "Yes",
      "No"
    ],
    "uiRequired1": "",
    "repotypes": [
      "Bitbucket",
      "Github",
      "Gitlab"
    ],
    "gitUsername": "",
    "gitPassword": "",
    "gitUrl": "",
    "gitProject": "",
    "gitRepoType": "",
    "entities": [],
    "tablesForUI": [],
    "relationshipResponsesForUI": [],
    "apptype": "Microservice application",
    "packageName": "com.wipro",
    "build": "Maven",
    "dbType": "SQL database",
    "proddb": "MySQL",
    "devDb": "",
    "ml": "",
    "lngs": "",
    "appport": "8080",
    "msgb": "",
    "srch": "",
    "srvcdisc": "",
    "cache1": "",
    "auth": "",
    "uiFw": "",
    "libSass": "",
    "test": "",

    "swaggergen": false
  }
  tempRelationships: any = [];
  relationships: any = [];
  entities: any = {};


  instanceName = "test";
  gitUrl = "https://github.com/kishore786/nextbusservice.git";
  branchName = "dev";
  language = "Java";
  lVersion = "1.8";
  appServer = "ApacheTomcat";
  fieldType = "Brownfield";
  serverType = "VM";
  targetCloudType = "AWS";
  devInstance = "1";
  emailId = "kishore.kar@wipro.com";







  jenkinsToken = "jenkinsToken";
  jenkinsK8SUrl = "https://okd.wiprodx.com:8443/";
  jenkinsK8SNamespace = "dmp";






  gitRepoType = "Bitbucket";
  gitProject = "dmp";
  gitUsername = "root";
  gitPassword = "root";
  gitUrlDevlite = "http://13.234.113.15:7990";


  buildFile = "Jenkinsfile";

  JenkinsUrl = "http://13.232.60.218:8080";
  JenkinsUsername = "admin";
  JenkinsPassword = "admin";
  JenkinsJobName = "test";

  JenkinsData: any = {
    "scm": {
      "url": "",
      "user": "",
      "password": "",
      "branch": "master",
      "buildFile": "JenkinsFile"
    },
    "jenkins": {
      "url": "",
      "user": "",
      "password": "",
      "jobName": "",
      "jobType": "pipeline",
      "builtStart": true
    }

  }

  isImportFromSwagger = false;
  importFromSwagger = "file";
  swaggerUrl = "";
  //formData;
  //swagUrlData: any = {};

  fileToUpload: File = null;

  devliteData: any = {
  }

  constructor(private _appService: AppService, private toast: ToastrService) {
  }
  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  createSwagFileData() {
    this.isImportFromSwagger = true;
    this.obj.swaggergen = true;
    this._appService.sendSwagFileData(this.fileToUpload).subscribe(
      data => {
        this.toast.success('Success');
        console.log(data);
      },
      error => {
        console.log(error);
      },
    );
  }

  createSwagUrlData(swaggerUrl) {
    this.isImportFromSwagger = true;
    swaggerUrl = swaggerUrl.trim();
    if (!swaggerUrl) {
      this.toast.warning("url should not be empty.");
      return;
    }
    if (swaggerUrl.endsWith(".json") || swaggerUrl.endsWith(".yml") || swaggerUrl.endsWith(".yaml")) {
      this.obj.swaggergen = true;
      this._appService.sendSwagUrlData(swaggerUrl).subscribe(
        data => {
          this.toast.success('Success');
          console.log(data);
        },
        error => {
          console.log(error);
        },
      );
    }
    else {
      this.toast.warning("extension should be .json/.yml/.yaml.");
      return;
    }


  }



  createDevliteData(instanceName, gitUrl, branchName, language, lVersion, appServer, fieldType, serverType, targetCloudType, devInstance, emailId) {
    this.devliteData.instanceName = instanceName;
    this.devliteData.gitUrl = gitUrl;
    this.devliteData.branchName = branchName;
    this.devliteData.language = language;
    this.devliteData.lVersion = lVersion;
    this.devliteData.appServer = appServer;
    this.devliteData.fieldType = fieldType;
    this.devliteData.targetCloudType = targetCloudType;
    this.devliteData.devInstance = devInstance;
    this.devliteData.emailId = emailId;
    console.log(this.devliteData);
    this._appService.sendDevliteData(this.devliteData).subscribe(
      data => {
        this.toast.success('Success ');
        console.log(data);
      },
      error => {
        console.log(error);
      },
    );
  }







  Jenkins(JenkinsUrl, JenkinsUsername, JenkinsPassword, JenkinsJobName) {
    this.JenkinsData.scm.url = this.obj.gitUrl + '/scm/dmp/' + this.obj.appName + '.git';
    this.JenkinsData.scm.user = this.obj.gitUsername;
    this.JenkinsData.scm.password = this.obj.gitPassword;

    this.JenkinsData.jenkins.url = JenkinsUrl;
    this.JenkinsData.jenkins.user = JenkinsUsername;
    this.JenkinsData.jenkins.password = JenkinsPassword;
    this.JenkinsData.jenkins.jobName = JenkinsJobName;

    console.log(this.JenkinsData);
    this._appService.sendJenkinsData(this.JenkinsData).subscribe(
      data => {
        this.toast.success("Success");
        console.log(data);
      },
      error => {
        console.log(error);
        this.toast.error(error.message);
      },
    );

  }




  addslashes(str) {
    return (str).replace(/[\"]/g, '\\$&');
  };

  add(fieldName: String, fieldType: String) {
    fieldName = fieldName.trim();
    if (!fieldName) {
      this.toast.warning("field name should not be empty.");
      return;
    }
    this.array.push({
      "fieldName": fieldName,
      "fieldType": fieldType
    });
    console.log("Field " + fieldName + ":" + fieldType + " added");
    this.toast.info("Field " + fieldName + ":" + fieldType + " added");
  }


  delete(newarray) {
    this.array = this.array.filter(h => h !== newarray);
    console.log('Field ' + newarray.fieldName + ' deleted !');
    this.toast.warning('Field ' + newarray.fieldName + ' deleted !');

  }
  delete2(newarray) {
    this.tempRelationships = this.tempRelationships.filter(h => h !== newarray);
   this.toast.warning('Relatioship deleted !');

  }
  save(entityTableName: string) {
    entityTableName = entityTableName.trim();
    this.obj.tablesForUI.push({
      "entityTableName": '',
      "fields": ''
    });
    console.log("Entity " + entityTableName + " saved");
    this.toast.info("Entity " + entityTableName + " saved");
    var x = this.obj.tablesForUI.length;
    this.obj.tablesForUI[x - 1].entityTableName = entityTableName;
    this.obj.tablesForUI[x - 1].fields = this.array;
    this.entities[entityTableName] = {};
    this.entities[entityTableName]['tableData'] = this.array;
    this.array = [
      {
        "fieldName": "",
        "fieldType": ""
      }
    ];
  }
  addRelationShip(otherEntityRelationshipName: String, relationshipType: String, otherEntityName: String) {
    otherEntityRelationshipName = otherEntityRelationshipName.trim();
    relationshipType = relationshipType.trim();
    otherEntityName = otherEntityName.trim();
    if (!otherEntityRelationshipName || !otherEntityName ) {
      this.toast.warning("Please select at least one relationship.");
      return;
    }

    console.log(otherEntityRelationshipName);
    console.log(otherEntityName);
    
    
    this.tempRelationships.push(
      {
        "otherEntityName": otherEntityName,
        "otherEntityRelationshipName": otherEntityRelationshipName,
        "relationshipName": otherEntityName,
        "relationshipType": relationshipType,
        "ownerSide": false
      }
    );
    this.obj.relationshipResponsesForUI.push(
      {
        "entityOneName": otherEntityRelationshipName,
        "entityTwoName": otherEntityName,
        "relationshipType": relationshipType,
      }
    );
    console.log("Relationship" + " " + otherEntityRelationshipName + " " + "->" + " " + otherEntityName + " added");
    this.toast.info("Relationship" + " " + otherEntityRelationshipName + " " + "->" + " " + otherEntityName + " added");
  }

  createFilter(deploymentEnv, jenkinsToken, jenkinsK8SUrl, jenkinsK8SNamespace, uiFramework1, appName, appType1, defaultPackage, authType1, defaultPort, messagingAPI1) {
    appName = appName.trim();
    if (!appName) {
      this.toast.warning("app name should not be empty.");
      return;
    }

    console.log(deploymentEnv);
    this.obj.deploymentEnv = deploymentEnv;
    this.obj.jenkinsToken = jenkinsToken;
    this.obj.jenkinsK8SUrl = jenkinsK8SUrl;
    this.obj.jenkinsK8SNamespace = jenkinsK8SNamespace;


    this.obj.appName = appName;
    this.obj.appType1 = appType1;
    this.obj.defaultPackage = defaultPackage;
    this.obj.authType1 = authType1;
    this.obj.defaultPort = defaultPort;
    this.obj.messagingAPI1 = messagingAPI1;

    this.obj.uiFramework1 = uiFramework1;
    var i;
    for (i in this.entities) {
      var j;
      this.relationships = [];
      for (j in this.tempRelationships) {
        if (this.tempRelationships[j].otherEntityRelationshipName == i) {
          this.relationships.push(
            {
              "otherEntityName": this.tempRelationships[j].otherEntityName,
              "otherEntityRelationshipName": this.tempRelationships[j].otherEntityRelationshipName,
              "relationshipName": this.tempRelationships[j].otherEntityName,
              "relationshipType": this.tempRelationships[j].relationshipType,
              "ownerSide": false
            }
          );
        }
      }
      this.entities[i]['relationships'] = this.relationships;
    }
    this.obj.entities = this.entities;

    this.strJSON = JSON.stringify(this.obj);
    this.stringifiedJSON = this.addslashes(this.strJSON);
    this.test = '{"' + this.obj.appName + '":"' + this.stringifiedJSON + '"}';
    //this.toast.info('Data Saved');
    this.sendData();
  }
  sendData() {
    console.log(this.test);
    this.isLoading$.next(true);
    this.downloadAvailable = false;
    this.toast.info("Sending Data to CodegenStatusController");
    this._appService.save(this.test).subscribe(
      sample => {
        this.toast.success(sample);
      },
      error => {
        console.log(error);
      },
      () => {
        this.isLoading$.next(false);
        this.isValid = true;
        this.execute();
      }
    );
  }
  execute() {
    //this.toast.info("Sending Data to FetchProgressStatusController");
    this._appService.status(this.test).subscribe(
      sample => {
        //this.toast.success(sample);
        this.downloadAvailable = true;
        this.pushToGit = true;
      },
      error => console.log(error)
    );
  }
  download() {
    this.toast.info("Downloading zip");
    this._appService.downloadzip(this.test, this.obj.appName).subscribe(
      data => {
        this.getZipFile(data);
      },
      error => console.log(error)
    );
  }
  getZipFile(data: any) {
    const blob = new Blob([data], { type: 'application/octet-stream' });
    const a: any = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = this.obj.appName + '.zip';
    a.click();
    window.URL.revokeObjectURL(url);
  }
  push(gitRepoType, gitProject, gitUsername, gitPassword, gitUrlDevlite) {
    this.obj.gitRepoType = gitRepoType;
    this.obj.gitProject = gitProject;
    this.obj.gitUsername = gitUsername;
    this.obj.gitPassword = gitPassword;
    this.obj.gitUrl = gitUrlDevlite;

    this.strJSON = JSON.stringify(this.obj);
    this.stringifiedJSON = this.addslashes(this.strJSON);
    this.test = '{"' + this.obj.appName + '":"' + this.stringifiedJSON + '",' +
      '"_gitUrl":"' + gitUrlDevlite +
      '","_gitUserName":"' + gitUsername +
      '","_gitPassword":"' + gitPassword +
      '","_gitRepoType":"' + gitRepoType +
      '","_gitProject":"' + gitProject +
      '"}';

    //console.log(this.test);


    //this.toast.info("Pushing to Git");
    this._appService.gitPush(this.test).subscribe(
      data => {
        var pos = data.search("unsuccessful");
        if (pos != -1) {
          this.toast.error("Push unsuccessful");
          console.log(data);
        }
        else {
          this.jenkinsDeploy = true;
          this.toast.success("Push successful");
          console.log(data);
        }

      },
      error => console.log(error)
    );
  }







}