exports.level = {
  "goalTreeString": "%7B%22branches%22%3A%7B%22main%22%3A%7B%22target%22%3A%22C7%27%22%2C%22id%22%3A%22main%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22feature1%22%3A%7B%22target%22%3A%22C2%22%2C%22id%22%3A%22feature1%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22bugfix1%22%3A%7B%22target%22%3A%22C3%22%2C%22id%22%3A%22bugfix1%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22mistake1%22%3A%7B%22target%22%3A%22C4%22%2C%22id%22%3A%22mistake1%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22bugfix2%22%3A%7B%22target%22%3A%22C5%22%2C%22id%22%3A%22bugfix2%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22feature2%22%3A%7B%22target%22%3A%22C6%22%2C%22id%22%3A%22feature2%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22bugfix3%22%3A%7B%22target%22%3A%22C7%22%2C%22id%22%3A%22bugfix3%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22mistake2%22%3A%7B%22target%22%3A%22C8%22%2C%22id%22%3A%22mistake2%22%2C%22remoteTrackingBranchID%22%3Anull%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C3%22%3A%7B%22parents%22%3A%5B%22C2%22%5D%2C%22id%22%3A%22C3%22%7D%2C%22C4%22%3A%7B%22parents%22%3A%5B%22C2%22%5D%2C%22id%22%3A%22C4%22%7D%2C%22C5%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C5%22%7D%2C%22C6%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C6%22%7D%2C%22C7%22%3A%7B%22parents%22%3A%5B%22C6%22%5D%2C%22id%22%3A%22C7%22%7D%2C%22C8%22%3A%7B%22parents%22%3A%5B%22C7%22%5D%2C%22id%22%3A%22C8%22%7D%2C%22C2%27%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%27%22%7D%2C%22C6%27%22%3A%7B%22parents%22%3A%5B%22C2%27%22%5D%2C%22id%22%3A%22C6%27%22%7D%2C%22C3%27%22%3A%7B%22parents%22%3A%5B%22C6%27%22%5D%2C%22id%22%3A%22C3%27%22%7D%2C%22C5%27%22%3A%7B%22parents%22%3A%5B%22C3%27%22%5D%2C%22id%22%3A%22C5%27%22%7D%2C%22C7%27%22%3A%7B%22parents%22%3A%5B%22C5%27%22%5D%2C%22id%22%3A%22C7%27%22%7D%7D%2C%22tags%22%3A%7B%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22main%22%2C%22id%22%3A%22HEAD%22%7D%7D",
  "solutionCommand": "git checkout main;git cherry-pick feature1 feature2 bugfix1 bugfix2 bugfix3",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\",\"remoteTrackingBranchID\":null},\"feature1\":{\"target\":\"C2\",\"id\":\"feature1\",\"remoteTrackingBranchID\":null},\"bugfix1\":{\"target\":\"C3\",\"id\":\"bugfix1\",\"remoteTrackingBranchID\":null},\"mistake1\":{\"target\":\"C4\",\"id\":\"mistake1\",\"remoteTrackingBranchID\":null},\"bugfix2\":{\"target\":\"C5\",\"id\":\"bugfix2\",\"remoteTrackingBranchID\":null},\"feature2\":{\"target\":\"C6\",\"id\":\"feature2\",\"remoteTrackingBranchID\":null},\"bugfix3\":{\"target\":\"C7\",\"id\":\"bugfix3\",\"remoteTrackingBranchID\":null},\"mistake2\":{\"target\":\"C8\",\"id\":\"mistake2\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C2\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C1\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C1\"],\"id\":\"C6\"},\"C7\":{\"parents\":[\"C6\"],\"id\":\"C7\"},\"C8\":{\"parents\":[\"C7\"],\"id\":\"C8\"}},\"tags\":{},\"HEAD\":{\"target\":\"mistake2\",\"id\":\"HEAD\"}}",
  "hint": {
    "de_DE": "Cherry-Picking ist einfach toll."
  },
  "name": {
    "de_DE": "Cherry-Picking"
  },
  "startDialog": {
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## git cherry-pick",
              "Mit dem Befehl können einer oder mehrere Commits an den HEAD angehängt werden. Er wird wie folgt genutzt:",
              "- `git cherry-pick <Commit1> <Commit2> <...>`"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Schauen wir uns das mal an.",
              "",
              ""
            ],
            "afterMarkdowns": [
              "Wie du sehen kannst, wird nur der Commit mit dem neuen Feature zum main Branch hinzugefügt.",
              "",
              ""
            ],
            "command": "git cherry-pick feature",
            "beforeCommand": "git checkout -b feature; git commit; git checkout -b mistake; git commit; git checkout main"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Versuche es doch mal selbst. Füge dem 'main'-Branch nur die Features und Bugfixes hinzu. Die Reihenfolge ist in der Zielansicht dargestellt."
            ]
          }
        }
      ]
    }
  }
};
