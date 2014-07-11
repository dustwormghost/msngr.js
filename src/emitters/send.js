msngr.extend((function () {

	return {
		send: function (message, context) {
			if (!msngr.utils.isValidMessage(message)) {
				msngr.utils.ThrowRequiredParameterMissingOrUndefinedException("message");
			}

			for (var i = 0; i < msngr.registry.routers.count(); ++i) {
				msngr.registry.routers.get(i).send(msngr.utils.ensureMessage(message), context);
			}
		}
	};
}()));