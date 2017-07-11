# Tour of Heroes with Angular and Spring Boot

Example app that shows how to create a REST Spring Boot API and display its data with Angular on frontend.
Based on the [Tour of Heroes tutorial](https://angular.io/tutorial).

Installation
------------

To install the archetype in your local repository execute following commands:


    git clone https://github.com/wkrix/tour-of-heroes-angular-spring-boot
    cd tour-of-heroes-angular-spring-boot
    mvn clean install


Run the project
----------------

	java -jar server/target/tour-of-heroes-server.jar

	
Test on the browser
-------------------

    http://localhost:8080/
    
    

   
       
           
               
                  
                  
Features
--------






* I used the [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin) to build the Angular application with Maven.
I specified the node and yarn versions and the working directory in the configuration section. I also added three executions. The first execution downloads and installs node and yarn to the directories node and node_modules. Yarn downloads a lot of packages, so added both directories to the ignore list of vcs. The second execution runs yarn install in the working directory to download all yarn dependencies of my project. The third execution runs yarn build in the working directory to build the Angular frontend.
    ```xml
            <plugin>
                    <groupId>com.github.eirslett</groupId>
                    <artifactId>frontend-maven-plugin</artifactId>
                    <version>1.4</version>
            
                    <executions>
            
                      <execution>
                        <id>install node and yarn</id>
                        <goals>
                          <goal>install-node-and-yarn</goal>
                        </goals>
                        <configuration>
                          <nodeVersion>v6.11.0</nodeVersion>
                          <yarnVersion>v0.27.5</yarnVersion>
                        </configuration>
                      </execution>
            
                      <execution>
                        <id>yarn install</id>
                        <goals>
                          <goal>yarn</goal>
                        </goals>
                        <configuration>
                          <arguments>install</arguments>
                        </configuration>
                      </execution>
            
                      <execution>
                        <id>yarn build</id>
                        <goals>
                          <goal>yarn</goal>
                        </goals>
                        <configuration>
                          <arguments>build</arguments>
                        </configuration>
                      </execution>
            
                    </executions>
                  </plugin>
    ```


* I edited .angular-cli.json and changed the outDir in the apps section for the Spring Boot backend static resource:
    ```
        "outDir": "target/client"
    ```

* For the Spring Boot backend static resource I wrote these lines in the client's pom.xml:
    ```xml
            <resources>
              <resource>
                <directory>target/client</directory>
                <targetPath>static</targetPath>
              </resource>
            </resources>
    ```
    
* Finally I added the client dependency to the server's pom:
    ```xml
                <dependency>
                    <groupId>hu.klayton.wade.heroes</groupId>
                    <artifactId>tour-of-heroes-client</artifactId>
                    <version>${project.version}</version>
                    <scope>runtime</scope>
                </dependency>
    ```
