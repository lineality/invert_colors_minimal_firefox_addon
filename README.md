### invert_colors_minimal_firefox_addon

#### code here: https://github.com/lineality/invert_colors_minimal_firefox_addon

#### extension/add-on here: https://addons.mozilla.org/en-US/firefox/addon/dark-mode-invert-colors/

# Dark Mode: eye-saving invert colors minimal firefox browser addon

# About Invert Colors Minimal

## Description
With security, transparency, and data-hygiene in mind: 
This is a minimal firefox addon/extension
- 12 lines of code (not counting lone parenthesis and punctuation)
- in two files

to invert colors in a browser tab/window
(e.g. to reduce eye-strain by turning inscrutably white pages black)
that you can manually deploy in your browser, so that you know
exactly what code you are running. Black-Box addons in the 
addon-store may be safe to use, often are not safe, 
but it is very difficult for an average user to test this
and new browser extension vulnerabilities are being 
uncovered continually, e.g. see:

https://twit.tv/shows/security-now/episodes/938 

#### Quote:
"Research reveals vulnerabilities in browser extensions that allow them to steal plaintext passwords from a website's HTML source code. Even sites like Google, Facebook, Amazon, IRS, and Capital One are affected."


This extensions background.js file should be simple, only five lines of code, the main line being:
```
    code: `document.body.style.filter === "invert(100%)" ? document.body.style.filter = "" : document.body.style.filter = "invert(100%)"`
```

- This extension requires the active tab permission: "permissions": ["activeTab"]. 
- This extension allows the color inversion to be toggled on or off, and not be
permanently on for all tabs for all urls, and 
- This extension uses no popups. 

If the version you have tries to get more permissions, 
please stop and figure out what is going on.
You can make your own clean version to use from the github code provided.

# Steps to "test" the code for this Firefox addon
1. Type "about:debugging#/runtime/this-firefox" in the Firefox address bar and hit Enter.
2. Click on "Load Temporary Add-on…" and select your manifest.json file to load the addon for testing.

Now, when you click on the addon's icon, it should invert the colors of the active tab in Firefox. 
See 'settings' section below, as the icon may not automatically appear.

(You can later package this addon into a .zip file and upload it to the Firefox Add-ons Developer Hub for distribution.)

# Settings
You may need to go to about:addons -> extensions -> select this extension -> scroll down:
- Run in Private Windows (toggle on/off)
- Run on sites with restrictions (toggle on/off)

or click on the puzzle piece icon and click on Manage Extensions, 
select Dark Mode Invert Colors, and 'allow.' 

For example, I have firefox running in fully-locked-down amnesiac mode with nothing saved etc., which I think firefox treats as effectively (or technically) always in private-window mode.
So 'private windows' may refer to your configuration settings for all tabs, rather than specifically selecting 'new private window.'

# Choice and Design
However, do not do anything you feel insecure doing. My ultimate recommendation 
is that you write your own extension (perhaps from help with this code) that fits 
exactly your security needs, doing only what you need done well and in a way you entirely understand.

There are various design trade-offs that you can and should select from, and modify what you want:
- simple invert color or some other color shift (maybe a least-worst option but fits most cases well and is simple)
- pop-ups or no popups  (I prefer to not use any popups so no popups are used here)
- permissions (this has various meanings. 'active tab' permission is used, but that seems to be a different meaning from 'no permissions requested' as firefox says.
- selective page/tab vs. all (see below)
- toggle or always on (For selective tab and always on, you can make a version with absolute zero "permissions" technically, but that applies itself to all url's and tabs and sites with no choice, which is a sense is another kind of 'permission' as you have no choice to turn it on or off. I chose not to do that, even though in some ways it is simpler (fewer lines of simpler code, easier to understand) an uses fewer 'permissions.' 

# For a similar chrome browser extension, see here:
https://github.com/lineality/invert_colors_minimal_chrome_extension

