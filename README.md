### invert_colors_minimal_firefox_addon
## Dark Mode: eye-saving invert colors minimal firefox browser addon

# About Invert Colors Minimal

## Description
With security, transparency, and data-hygiene in mind: 
This is a minimal firefox addon to invert colors in a browser tab
(e.g. to reduce eye-strain by turning inscrutably white pages black)
that you can manually deploy in your browser, so that you know
exactly what code you are running. Black-Box addons in the 
addon-store may be safe to use, but it is very difficult for an average
user to test this.
This requires no permissions. If the version you have tries to get any
permissions, please stop and figure out what is going on, check the code,
check default settings (which may be outside of the addon itself).

# Steps to "test" the Firefox addon
1. Type "about:debugging#/runtime/this-firefox" in the Firefox address bar and hit Enter.
2. Click on "Load Temporary Add-on…" and select your manifest.json file to load the addon for testing.

Now, when you click on the addon's icon, it should invert the colors of the active tab in Firefox. 
See 'settings' section below, as the icon may not automatically appear.

(You can later package this addon into a .zip file and upload it to the Firefox Add-ons Developer Hub for distribution.)

#: settings
You may need to go to about:addons
or click on the puzzle piece icon and click on Manage Extensions, 
select Dark Mode Invert Colors, and 'allow' 

## For a similar chrome browser extension, see here:

https://github.com/lineality/invert_colors_minimal_chrome_extension


