export default {
  "colors": {
    "grey": "#bdc3c7",
    "primary": "white",
    "danger": "#e74c3c",
    "secondary": "black",
    "success": "#2ecc71",
    "accent": "#3498db",
    "warning": "#f39c12",
    "transparent": "transparent"
  },
  "fonts": {
    "regular": "Roboto"
  },
  "gradients": {
    "primary": {
      "start": 0,
      "angle": 90,
      "end": 100,
      "colors": [
        "success",
        "accent"
      ],
      "kind": "linear"
    },
    "secondary": {
      "start": 0,
      "end": 100,
      "angle": 0,
      "colors": [
        "accent",
        "success"
      ],
      "kind": "linear"
    },
    "loading": {
      "start": 0,
      "end": 100,
      "angle": 90,
      "colors": [
        "transparent",
        "grey",
        "transparent"
      ],
      "kind": "linear"
    }
  },
  "radii": {
    "m": "10px",
    "round": "50%"
  },
  "spacings": {
    "s": "40px",
    "m": "100px"
  },
  "lineHeights": {
    "s": 1.7
  },
  "letterSpacings": {
    "s": 1.6
  },
  "fontSizes": {
    "s": "14px"
  },
  "sizes": {
    "s": "10px",
    "m": "100px",
    "xl": "200px"
  },
  "borderWidths": {
    "s": "2px"
  },
  "shadows": {
    "none": {
      "color": "transparent",
      "offset": {
        "width": 0,
        "height": 0
      },
      "opacity": 0,
      "elevation": 0
    },
    "soft": {
      "color": "accent",
      "offset": {
        "width": 0,
        "height": 2
      },
      "opacity": 0.2,
      "radius": 4,
      "elevation": 2
    },
    "medium": {
      "color": "black",
      "offset": {
        "width": 0,
        "height": 3
      },
      "opacity": 0.3,
      "radius": 4,
      "elevation": 3
    },
    "strong": {
      "color": "black",
      "offset": {
        "width": 0,
        "height": 4
      },
      "opacity": 0.4,
      "radius": 4,
      "elevation": 4
    }
  },
  "breakpoints": {
    "xs": "300px",
    "sm": "600px",
    "md": "900px",
    "lg": "1300px"
  },
  "transitions": {
    "light": "all 0.5s"
  },
  "components": {
    "Box": {
      "tag": "div",
      "style": {}
    },
    "Button": {
      "tag": "button",
      "style": {
        "transition": "light",
        "height": "m",
        "width": "m",
        "bg": {
          "md": "danger",
          "lg": "primary"
        },
        "color": "secondary",
        "borderRadius": "m",
        "borderWidth": "s",
        "borderStyle": "solid",
        "borderColor": "primary",
        "&:hover": {
          "gradient": "secondary",
          "color": "primary"
        }
      },
      "props": {
        "aria-label": "button",
        "type": "button"
      },
      "variants": {
        "primary": {
          "props": {
            "aria-label": "primary button"
          },
          "style": {
            "bg": "secondary",
            "borderColor": "primary",
            "color": "primary",
            "&:hover": {
              "bg": "primary",
              "color": "secondary"
            }
          }
        },
        "round": {
          "style": {
            "borderRadius": "round"
          }
        }
      }
    },
    "Typography": {
      "tag": "p",
      "style": {
        "fontFamily": "regular",
        "fontSize": "s",
        "lineHeight": "s",
        "letterSpacing": "s"
      },
      "variants": {
        "h1": {
          "tag": "h1",
          "style": {
            "color": "red"
          }
        },
        "h2": {
          "tag": "h1",
          "style": {
            "color": "green"
          }
        },
        "h3": {
          "tag": "h3",
          "style": {
            "color": "blue"
          }
        },
        "code": {
          "tag": "pre",
          "style": {
            "color": "primary"
          }
        }
      }
    },
    "button": {
      "tag": "button",
      "style": {
        "bg": "primary",
        "px": "m"
      },
      "variants": {
        "primary": {
          "style": {
            "corner": "xl"
          }
        }
      }
    }
  }
}