# TerminalTutor

terminal documentation accessible via commandline.

## How it works

This README is parsed by the script and everything below the **Commands** section is considered as "data".

The script will pull in all the commands data, parse into an array and run fuzzy searching on it from user command line input.

## Installation

* Make sure you have [NodeJS](https://nodejs.org/en/download/) installed.
* In terminal (probably best to copy and paste):

```bash
$ git clone https://github.com/mottaquikarim/TerminalTutor/ && cd TerminalTutor && npm install -g
```

## Usage

```bash
$ terminaltutor -q "copy file"
```

If you want to refresh the data file (ie: the following list can and will change, if you want to pull in latest changes)

```bash
$ terminaltutor -r -q "copy file"
```

## Adding to this list

* [Fork this repo](https://help.github.com/articles/fork-a-repo/)
* [Submit a pull request](https://help.github.com/articles/about-pull-requests/)

If you want to maintain and use your own personal list, you can also just copy this readme, add your own content, and point `terminaltutor` to your personal URL. 

Open up `options.js`, update the `url` key, save, and run:

```
$ npm install -g
```

## Commands

List of helpful commands.

---

### move file, rename file

* rename or move file1 to file2
* if file2 is an existing directory, moves file1 into directory file2

```bash
$ mv file1 file2
```
---

### copy file

* copy file1 to file2

```bash
$ cp file1 file2
```
---

### copy folder

* copy dir1 to dir2
* create dir2 if it doesn't exist

```bash
$ cp -r dir1 dir2
```

---

### list files, files in folder

* directory listing

```bash
$ ls
$ ls -ahl   # formatted listing with hidden files
```

---

### switch folder, change folder, change directory

```bash
$ cd [directory_name]
$ cd ~                # change to home directory
```

---

### where am I?, current directory, current folder

```bash
$ pwd
```
---

### create directory, make directory, make folder

* you can even create a new folder in existing folder

```bash
$ mkdir [directory_name]
$ mkdir some_existing_folder/[directory_name]
```

---

### delete directory, delete folder, remove directory, remove folder

* removing file
```bash
$ rm [file_name]
$ rm -rf [folder_name]  # delete folder
$ rm *.js               # to remove files of one type
                        # will remove only files that have .js extensions
```

---

### create empty file, new file

```bash
$ touch [file_name]
```

---

### preview file, see file, look into file

```bash
$ cat [file_name]
$ head [file_name]      # output the first 10 lines of file
$ tail [file_name]      # output the last 10 lines of file
$ tail -f [file_name]   # output the contents of file as it grows, starting with the last 10 lines
```

---

### create node project, start node, init node

```bash
$ mkdir [node_project_folder_name]
$ cd [node_project_folder_name]
$ npm init
```

---

### install node dependency, node add library

```bash
$ cd [node_project_folder_name]
$ npm install --save [name_of_repo]
```

---

### run node, run node file

```bash
$ cd [node_project_folder_name]
$ node [file_name].js
```


---


**[Credit](https://files.fosswire.com/2007/08/fwunixref.pdf)**: content based off the cheat sheet found in that PDF

