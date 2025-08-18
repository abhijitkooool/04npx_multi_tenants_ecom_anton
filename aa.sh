# this aa.sh is a shellscript file that will monitor the folder that we are using as a workspace in VSCode, where a git repo is being modified hence to save time we want to implement a mechanism to look for changes in the files and folder in the directory we are working and do the following in one command 1. git add -a 2. git commit -m 'msg' 3. git push

# this file will stay in  the home directory of the system as a global file that will let us use it from anywhere in the directory structure of the system

# 1st step is to ask what is the commit msg as it will chage every time
echo "Enter commit messege.."

# read the users commit messege in a variable
read commitMsg

# now we will navigate to the path of the local git repo
# cd

# now we will use the git commands in sucsession
git add .
git commit -m "$commitMsg"
git push origin main

# next we save the changes in this qc.sh script file using the terminal we use chmod to make it executable using "chmod +x qc.sh" it is also better to locate this files in the original git diectory to help us execute it from the terminal of the same folder in VSCode.
