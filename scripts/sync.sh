#!/usr/bin/env bash

red=`tput setaf 1`
green=`tput setaf 2`
yellow=`tput setaf 3`
reset=`tput sgr0`

upstream_ssh_repo="git@github.com:KL-Global/testing-cypress.git"

# This script is for rebasing this repo with upstream https://github.com/KL-Global/testing-cypress
# How:
# - Stash any changes
# - Fetch upstream
# - Rebase with upstream/master
#   + There might be conflicts need to solve manually
# - Force push to GitHub
# - Unstash (manually)

echo "${green}Stash your changes!${reset}"
git add . && git stash

echo # empty ine
echo "${green}Fetch upstream!${reset}"
u=$(git remote get-url upstream)
if [ -z "$u" ]; then
    echo "${yellow}>> Add upstream remote${reset}"
    git remote add upstream "$upstream_ssh_repo"
elif [ "$u" != "$upstream_ssh_repo" ]; then
    echo "${yellow}>> Update upstream remote url${reset}"
    git remote set-url upstream "$upstream_ssh_repo"
fi
git fetch upstream

echo # empty ine
echo "${red}[WARNING!!!] ${green}Rebase with upstream/master!${reset}"
echo "${yellow}>> There might be conflicts, you will need to fix it yourself!"
echo ">> After fixing conflicts, you will need to do: ${red}git add . ${yellow}and ${red}git rebase --continue${yellow}."
echo ">> Last thing to do is ${red}git push --force${yellow} and do not forget to unstash your changes ${red}git stash pop${yellow}.${reset}"
git checkout main && git pull --rebase upstream master
