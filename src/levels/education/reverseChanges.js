exports.level = {
  "goalTreeString": "%7B%22branches%22%3A%7B%22main%22%3A%7B%22target%22%3A%22C1%22%2C%22id%22%3A%22main%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22pushed%22%3A%7B%22target%22%3A%22C2%27%22%2C%22id%22%3A%22pushed%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22local%22%3A%7B%22target%22%3A%22C1%22%2C%22id%22%3A%22local%22%2C%22remoteTrackingBranchID%22%3Anull%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C3%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C3%22%7D%2C%22C4%22%3A%7B%22parents%22%3A%5B%22C3%22%5D%2C%22id%22%3A%22C4%22%7D%2C%22C2%27%22%3A%7B%22parents%22%3A%5B%22C2%22%5D%2C%22id%22%3A%22C2%27%22%7D%7D%2C%22tags%22%3A%7B%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22local%22%2C%22id%22%3A%22HEAD%22%7D%7D",
  "solutionCommand": "git checkout pushed;git revert HEAD;git checkout local;git reset main",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\",\"remoteTrackingBranchID\":null},\"pushed\":{\"target\":\"C2\",\"id\":\"pushed\",\"remoteTrackingBranchID\":null},\"local\":{\"target\":\"C4\",\"id\":\"local\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C3\"],\"id\":\"C4\"}},\"tags\":{},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"}}",
  "hint": {
    "de_DE": "Mach es wieder rückgängig."
  },
  "name": {
    "de_DE": "Änderungen rückgängig machen"
  },
  "startDialog": {
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Änderungen rückgängig machen",
              "Es kann passieren, dass bei einem Commit Fehler unterlaufen sind. Kein Problem! Git bietet Möglichkeiten um die Änderungen rückgängig zu machen.",
              "",
              "",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Solltest du den Commit bereits gepusht haben, dann kannst du mit `git revert` einen neuen Commit tätigen, der die Änderungen wieder rückgängig macht.",
              "",
              ""
            ],
            "afterMarkdowns": [
              "",
              "",
              ""
            ],
            "command": "git revert HEAD",
            "beforeCommand": "git checkout -b pushed; git commit; git checkout -b local main; git commit; git checkout pushed"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Hast du lokal commited, ohne zu pushen, dann kannst du diesen Commit mit `git reset` Befehl widerrufen.",
              "",
              ""
            ],
            "afterMarkdowns": [
              "",
              "",
              "",
              ""
            ],
            "command": "git reset HEAD^",
            "beforeCommand": "git checkout -b pushed; git commit; git checkout -b local main; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Zeig mir doch mal, wie du ein paar Änderungen rückgängig machst.",
              "",
              "",
              ""
            ]
          }
        }
      ]
    }
  }
};
