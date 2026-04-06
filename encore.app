{
	"id":   "test-cache-abgi",
	"lang": "typescript"
	"build": {
        "cgo_enabled": false,
        "docker": {
            "base_image": "scratch",

            "bundle_source": false,

            "working_dir": ""
        }

        "hooks": {
            "prebuild": "",
            "postbuild": ""
        }
    }
}
