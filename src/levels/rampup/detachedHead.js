exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\"},\"bugFix\":{\"target\":\"C4\",\"id\":\"bugFix\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C3\"],\"id\":\"C4\"}},\"HEAD\":{\"target\":\"C4\",\"id\":\"HEAD\"}}",
  "solutionCommand": "git checkout C4",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\"},\"bugFix\":{\"target\":\"C4\",\"id\":\"bugFix\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C3\"],\"id\":\"C4\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}",
  "name": {
    "en_US": "Detach yo' HEAD",
    "es_AR": "Desatacheá tu HEAD",
    "pt_BR": "Solte a sua cabeça",
    "fr_FR": "Détachez votre HEAD",
    "zh_CN": "分离 HEAD",
    "zh_TW": "分離 HEAD",
    "de_DE": "Den Kopf abtrennen",
    "ja"   : "HEADの分離",
    "ru_RU": "Теряем \"голову\" или detached HEAD"
  },
  "hint": {
    "en_US": "Use the label (hash) on the commit for help!",
    "es_AR": "¡Usá la etiqueta (hash) sobre el commit para ayudarte!",
    "pt_BR": "Use o identificador (hash) sobre o commit para te ajudar!",
    "de_DE": "Benutze den Bezeichner (den Hash) des Commits.",
    "ja"   : "コミットのラベル（hash）を使用",
    "fr_FR": "Utiiser le label (identifiant) du commit pour aider !",
    "zh_TW": "使用 commit 上的標籤（hash）來幫助你！",
    "zh_CN": "使用提交记录上的标签(hash)来求助！",
    "ru_RU": "Ориентируйся по идентификаторам (hash) коммитов."
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Moving around in Git",
              "",
              "Before we get to some of the more advanced features of Git, it's important to understand different ways to move through the commit tree that represents your project.",
              "",
              "Once you're comfortable moving around, your powers with other git commands will be amplified!",
              "",
              "",
              "",
              "",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## HEAD",
              "",
              "First we have to talk about \"HEAD\". HEAD is the symbolic name for the currently checked out commit -- it's essentially what commit you're working on top of.",
              "",
              "HEAD always points to the most recent commit which is reflected in the working tree. Most git commands which make changes to the working tree will start by changing HEAD.",
              "",
              "Normally HEAD points to a branch name (like bugFix). When you commit, the status of bugFix is altered and this change is visible through HEAD."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Let's see this in action. Here we will reveal HEAD before and after a commit."
            ],
            "afterMarkdowns": [
              "See! HEAD was hiding underneath our `master` branch all along."
            ],
            "command": "git checkout C1; git checkout master; git commit; git checkout C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "### Detaching HEAD",
              "",
              "Detaching HEAD just means attaching it to a commit instead of a branch. This is what it looks like beforehand:",
              "",
              "HEAD -> master -> C1",
              ""
            ],
            "afterMarkdowns": [
              "And now it's",
              "",
              "HEAD -> C1"
            ],
            "command": "git checkout C1",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "To complete this level, let's detach HEAD from `bugFix` and attach it to the commit instead.",
              "",
              "Specify this commit by its hash. The hash for each commit is displayed on the circle that represents the commit."
            ]
          }
        }
      ]
    },
    "es_AR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Moviéndose por ahí con Git",
              "",
              "Antes de meternos en algunas de las funcionalidades más avanzadas de git, es importante entender las distintas maneras de moverse por el árbol de commits que representa tu proyecto.",
              "",
              "Una vez que estés cómodo moviendote por ahí, tus poderes con los otros comandos de git ¡van a amplificarse!",
              "",
              "",
              "",
              "",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## HEAD",
              "",
              "Primero tenemos que hablar de \"HEAD\". HEAD es el nombre simbólico del commit actualmente checkouteado -- es, básicamente, el commit sobre el que estás trabajando.",
              "",
              "HEAD siempre apunta al commit más reciente, reflejado en el árbol de commits. La mayoría de los comandos de git que hacen cambios al árbol de commits empiezan modificando HEAD.",
              "",
              "Normalmente HEAD apunta al nombre de una rama (como bugFix). Cuando commiteás, el estado de bugFix se altera y este cambio es visible a través de HEAD."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Veamoslo en acción. Acá vamos a ver a HEAD antes y después de un commit."
            ],
            "afterMarkdowns": [
              "¡Ves! HEAD estuvo oculta bajo nuestra rama `master` todo este tiempo."
            ],
            "command": "git checkout C1; git checkout master; git commit; git checkout C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "### Detacheando HEAD",
              "",
              "Detachear (_des-adjuntar_) HEAD simplemente significa adjuntarla a un commit en lugar de a un branch. Así es como se ve de antemano:",
              "",
              "HEAD -> master -> C1",
              ""
            ],
            "afterMarkdowns": [
              "Y así queda ahora:",
              "",
              "HEAD -> C1"
            ],
            "command": "git checkout C1",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Para completar este nivel, detacheemos HEAD de `bugFix` y ataccheemosla al commit, en cambio.",
              "",
              "Especificá este commit por su hash. El hash de cada commit se muestra en el círculo que lo representa."
            ]
          }
        }
      ]
    },
    "pt_BR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Movendo-se no Git",
              "",
              "Antes de seguirmos para algumas funcionalidades mais avançadas do Git, é importante entender as diferentes formas de se mover através da árvore de commits que representa o seu projeto.",
              "",
              "Uma vez que você estiver confortável em se mover ao redor, seus poderes utilizando outros comandos do Git serão amplificados!",
              "",
              "",
              "",
              "",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## HEAD",
              "",
              "Primeiro temos que conversar sobre a \"cabeça\" (\"HEAD\"). HEAD é um nome simbólico para o commit atualmente ativo (que sofreu checkout por último) -- é essencialmente o commit sobre o qual você está trabalhando no momento.",
              "",
              "O HEAD sempre aponta para o commit mais recentemente copiado sobre a árvore de trabalho (arquivos do projeto). A maioria dos comandos do git que realizam mudanças sobre a árvore de trabalho começarão mudando o HEAD.",
              "",
              "Normalmente o HEAD aponta para o nome de um ramo (por exemplo, bugFix). Quando você commita, o status do bugFix é alterado e essa mudança ocorre também sobre o HEAD."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Vejamos isto em ação. Aqui vamos mostrar o HEAD antes e depois de um commit."
            ],
            "afterMarkdowns": [
              "Veja! O HEAD estava se escondendo ao lado do nosso `master` esse tempo todo."
            ],
            "command": "git checkout C1; git checkout master; git commit; git checkout C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "### Soltando a cabeça",
              "",
              "Soltar o HEAD significa anexá-lo a um commit em vez de anexá-lo a um ramo. Antes do estado solto (\"detached\"), é assim como se parece:",
              "",
              "HEAD -> master -> C1",
              ""
            ],
            "afterMarkdowns": [
              "E agora é",
              "",
              "HEAD -> C1"
            ],
            "command": "git checkout C1",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Para completar este nível, vamos soltar o HEAD do `bugFix` e em vez disso anexá-lo ao commit.",
              "",
              "Especifique o commit por meio do hash correspondente. O hash de cada commit é mostrado dentro do círculo que representa o commit (a letra C seguida de um número)."
            ]
          }
        }
      ]
    },
    "fr_FR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Se déplacer dans Git",
              "",
              "Avant que nous découvrions quelques unes des fonctionnalités les plus avancées de Git, il est important de comprendre les différents manières de se déplacer dans l'arbre des commits qui représente votre projet.",
              "",
              "Une fois que ces déplacements seront aisés, votre puissance avec les autres commandes de git sera amplifiée !",
              "",
              "",
              "",
              "",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## HEAD",
              "",
              "Premièrement nous avons parlé de \"HEAD\". HEAD est le nom symbolique pour le commit sur lequel nous nous situons actuellement -- plus simplement c'est le commit sur lequel nous travaillons.",
              "",
              "HEAD pointe toujours sur le commit le plus récent dans l'arbre des commits. La plupart des commandes git qui modifient l'arbre des commits vont commencer par modifier HEAD.",
              "",
              "Normalement HEAD pointe sur le nom d'une branche (comme bugFix). Quand vous effectuez un commit, le statut de bugFix est modifié et ce changement est visible par le biais de HEAD."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Voyons cela en action. Ici nous allons indiquer où se situe HEAD avant et après un commit."
            ],
            "afterMarkdowns": [
              "Vous voyez ! HEAD était caché en dessous de la branche `master` tout le long."
            ],
            "command": "git checkout C1; git checkout master; git commit; git checkout C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "### Détacher HEAD",
              "",
              "Détacher HEAD signifie simplement que l'on attache HEAD à un commit au lieu d'une branche. Voilà à quoi cela ressemble actuellement :",
              "",
              "HEAD -> master -> C1",
              ""
            ],
            "afterMarkdowns": [
              "Et maintenant c'est",
              "",
              "HEAD -> C1"
            ],
            "command": "git checkout C1",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Pour terminer ce niveau, détacher HEAD de `bugFix` et attachez-le plutôt au commit.",
              "",
              "Spécifiez le commit par son identifiant (hash). Le hash de chaque commit est affiché dans le rond qui représente le commit."
            ]
          }
        }
      ]
    },
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Navigation durch Git",
              "",
              "Bevor wir uns einige fortgeschrittene Konzepte in Git ansehen ist es wichtig, verschiedene Wege zum Navigieren durch den Commit-Baum, der das Projekt enthält, zu kennen.",
              "",
              "Sobald du das drauf hast, vergrößern sich deine Möglichkeiten in allen anderen Git-Befehlen.",
              "",
              "",
              "",
              "",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## HEAD",
              "",
              "Erst mal müssen wir über `HEAD` reden. `HEAD` ist ein Alias für den Commit, der gerade ausgecheckt ist -- es ist im Prinzip der Commit, an den du deinen nächsten Commit hängst.",
              "",
              "`HEAD` zeigt immer auf den neuesten Commit. Die meisten Git-Befehle, die den Baum verändern, fangen damit an dass sie `HEAD` verschieben.",
              "",
              "Normalerweise zeigt `HEAD` auf einen Branch-Namen (z.B. `bugFix`). Wenn du einen Commit machst, wird `bugFix` auf diesen Commit geschoben, und `HEAD` (da es auf `bugFix` zeigt) automatisch auch."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Schauen wir uns das mal in Aktion an. Wir werden hier `HEAD` vor und nach dem Commit anzeigen."
            ],
            "afterMarkdowns": [
              "Siehst du? `HEAD` war die ganze Zeit unter `master` versteckt."
            ],
            "command": "git checkout C1; git checkout master; git commit; git checkout C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "### HEAD abkoppeln",
              "",
              "`HEAD` abzukoppeln bedeutet, es direkt an einen bestimmten Commit zu hängen, anstatt an einen Branch. Wir gelangen dadurch in den \"detached HEAD state\". So sieht's vorher aus:",
              "",
              "`HEAD` -> `master` -> `C1`",
              ""
            ],
            "afterMarkdowns": [
              "Und jetzt:",
              "",
              "`HEAD` -> `C1`"
            ],
            "command": "git checkout C1",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Um diesen Level abzuschließen, lass uns mal `HEAD` von `bugFix` abkoppeln und an den Commit hängen.",
              "",
              "Gib den Commit mit seinem Hash an. Der Hash jedes Commits steht in dem Kreis, der den Commit darstellt."
            ]
          }
        }
      ]
    },
    "zh_CN": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 在Git中前后移动",
              "",
              "在接触Git的更多高级主题之前，我们先学习用不同的方法在代表你的项目的提交记录树上前后移动。",
              "",
              "一旦能够熟练地在Git中前进后退，你使用其他git命令的威力也会被放大！",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## HEAD",
              "",
              "我们首先看一下\"HEAD\". HEAD是当前提交记录的符号名称 -- 其实就是你正在其基础进行工作的提交记录。",
              "",
              "HEAD总是指向最近一次提交记录，表现为当前工作树。大多数修改工作树的git命令都开始于改变HEAD指向。",
              "",
              "HEAD通常指向分支名（比如bugFix）。你提交时，改变了bugFix的状态，这一变化通过HEAD变得可见。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "在实例中看一下。我们将会观察提交前后HEAD的位置。"
            ],
            "afterMarkdowns": [
              "看! HEAD一直藏在`master`分支后面。"
            ],
            "command": "git checkout C1; git checkout master; git commit; git checkout C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "### 分离 HEAD",
              "",
              "分离HEAD就是让其指向一个提交记录而不是分支名。这是命令执行之前的样子： ",
              "",
              "HEAD -> master -> C1",
              ""
            ],
            "afterMarkdowns": [
              "现在变成了",
              "",
              "HEAD -> C1"
            ],
            "command": "git checkout C1",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "想完成此关，从`bugFix`分离出HEAD并让其指向一个提交记录。",
              "",
              "通过hash值指定提交记录。每个提交记录的hash值显示在代表提交记录的圆圈中。"
            ]
          }
        }
      ]
    },
    "zh_TW": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 在 git 中前後移動",
              "",
              "在接觸 git 的更多進階的主題之前，我們先學習用不同的方法在你的 project 中的 commit tree 上面移動。",
              "",
              "一旦能夠熟練地在 commit tree 中隨意地移動，你使用其它的 git 指令也會更厲害！",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## HEAD",
              "",
              "我們首先看一下 \"HEAD\"，HEAD 是一個 reference，它是指向目前所 checkout 的 commit，基本上，其實就是你目前所在的 commit。",
              "",
              "在 commit tree 中，HEAD 總是指向最近的一次commit。大部份 git 的指令如果要修改 commit tree 的狀態的話，都會先改變 HEAD 所指向的 commit。",
              "",
              "HEAD 通常指向一個 branch 的名稱（比如 bugFix）。當你 commit 的時候，改變了 bugFix 的狀態，這一個變化可以從 HEAD 的改變中看到。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "在實際的例子中。我們將會觀察 commit 前後 HEAD 的位置。"
            ],
            "afterMarkdowns": [
              "看吧！HEAD 一直藏在 `master` 分支的後面。"
            ],
            "command": "git checkout C1; git checkout master; git commit; git checkout C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "### 分離 HEAD",
              "",
              "分離 HEAD 就是讓其指向一個 commit 而不是 branch 的名稱。這是指令執行之前的樣子：",
              "",
              "HEAD -> master -> C1",
              ""
            ],
            "afterMarkdowns": [
              "現在變成了",
              "",
              "HEAD -> C1"
            ],
            "command": "git checkout C1",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "想要完成這一個關卡，從 `bugFix` 分離出 HEAD 並且讓它指向一個 commit。",
              "",
              "通過 hash 值可以指定 commit。每個 commit 的 hash 值顯示在各自的圓圈中。"
            ]
          }
        }
      ]
    },
    "ja": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 任意の位置への移動",
              "",
              "Gitの上級機能に進む前に、自分のプロジェクトを表すコミットツリーの中で任意の位置へ移動する様々な方法を知っておく必要があります。",
              "",
              "移動方法が身につけば、他のgitコマンドをよりうまく扱えるようになるでしょう！",
              "",
              "",
              "",
              "",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## HEAD",
              "",
              "まずは\"HEAD\"から始めましょう。HEADとは現在チェックアウトされているコミットを指す単語です -- ようするに今作業中のコミットを表します。",
              "",
              "HEADはいつも、作業中のツリーに反映されている最新のコミットを指します。作業ツリーへ変更を加える多くのgitコマンドはまずHEADから処理を始めます。",
              "",
              "HEADは普段、ブランチ名（例えば、bugFixなど）を指します。コミットすれば、bugFixの状態が変更され、その変更がHEADから確認できるようになります。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "実際の動作を見てみましょう。ここでは、コミットの前と後のHEADの状態を確認します。"
            ],
            "afterMarkdowns": [
              "ほら、HEADが元から`master`ブランチの下に隠れていたんですね！"
            ],
            "command": "git checkout C1; git checkout master; git commit; git checkout C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "### HEADの分離",
              "",
              "HEADの分離(detached HEAD)とは単に、ブランチではなく特定のコミットにHEADを紐づけることです。実行前の状態は次のようです:",
              "",
              "HEAD -> master -> C1",
              ""
            ],
            "afterMarkdowns": [
              "そして実行後はこう:",
              "",
              "HEAD -> C1"
            ],
            "command": "git checkout C1",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "このレベルをクリアするには、HEADを`bugFix`から分離し、その代わりに特定のコミットに紐づけましょう。",
              "",
              "このコミットをハッシュで指定します。コミットのハッシュはそのコミットを表す丸に刻まれています。"
            ]
          }
        }
      ]
    },
    "ru_RU": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Прогулка по Git",
              "",
              "Прежде, чем перейти к более продвинутым фичам Git, важно понять различные способы перемещения по дереву коммитов вашего проекта.",
              "",
              "Как только вы научитесь свободно передвигаться по дереву коммитов, ваши возможности в Git преумножатся.",
              "",
              "",
              "",
              "",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## HEAD",
              "",
              "В первую очередь, поговорим о \"HEAD\". HEAD - это символическое имя текущего выбранного коммита -- это, по сути, тот коммит, над которым мы в данным момент работаем.",
              "",
              "HEAD всегда указывает на последний коммит, из вашего локального дерева. Большинство команд Git, изменяющих рабочее дерево, начнут с изменения HEAD.",
              "",
              "Обычно HEAD указывает на имя ветки (например bugFix). Когда вы делаете коммит, статус ветки bugFix меняется и это изменение видно через HEAD."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Посмотрим как это работает. Посмотрим где находится HEAD до и после коммита."
            ],
            "afterMarkdowns": [
              "Вот! HEAD всё это время скрывался за веткой master."
            ],
            "command": "git checkout C1; git checkout master; git commit; git checkout C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "### Detaching HEAD",
              "",
              "Отделение (detaching) HEAD означает лишь присвоение его не ветке, а конкретному коммиту. Посмотрим, что было до отделения:",
              "",
              "HEAD -> master -> C1",
              ""
            ],
            "afterMarkdowns": [
              "А вот что получилось теперь",
              "",
              "HEAD -> C1"
            ],
            "command": "git checkout C1",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Чтобы пройти уровень, давай отделим HEAD от ветки bugFix и присвоим его последнему коммиту в этой же ветке.",
              "",
              "Укажи коммит при помощи его идентификатора (hash). Hash для каждого коммита указан а кружке на схеме."
            ]
          }
        }
      ]
    }
  }
};
