```mermaid
flowchart TB
  subgraph themes
    direction LR

    subgraph ribbon-custom
      direction LR

      styles --> index.html
    end

    subgraph tw
      direction LR

      fonts --> styles
      images --> index.html
      packages --> index.html
      pictures --> index.html
      styles --> index.html
      video --> index.html
    end
  end
```
